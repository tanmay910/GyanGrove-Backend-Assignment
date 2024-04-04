// ingestData.js
const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('../models/Events');
const getDB = require('../database');
const csvtojson = require('csvtojson');


dotenv.config();

const { getWeather, getDistance } = require('../helper/externalApis');


exports.main = async (req, res) => {
  res.json({ message: 'Welcome to the event finder API' });
};
 

exports.ingestData = async (req, res) => {

  try {
    const csvFilePath = './Data/Backend_assignment_gg_dataset - dataset.csv';
    const source = await csvtojson().fromFile(csvFilePath);
  
    const events = source.map(row => ({
      eventName: row['event_name'],
      cityName: row['city_name'],
      date: new Date(row['date']),
      time: row['time'],
      latitude: parseFloat(row['latitude']),
      longitude: parseFloat(row['longitude']),
    }));
  
    await Event.insertMany(events);
    console.log('Import CSV into database successfully.');
    // await createIndexes();
    
    res.status(200).json({ message: 'CSV data imported successfully' });
  } catch (error) {
    console.error('Error parsing CSV file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

};



// Define route to find events based on user's location and date
exports.findEvents = async (req, res) => {
  try {
    const { latitude, longitude, date, page, pageSize } = req.query;

    const currentDate = new Date(date);
    const nextTwoWeeks = new Date(currentDate);
    nextTwoWeeks.setDate(nextTwoWeeks.getDate() + 14);

    const totalEvents = await Event.countDocuments({
      date: { $gte: currentDate, $lte: nextTwoWeeks }
    });

    const totalPages = Math.ceil(totalEvents / pageSize);

    const events = await Event.find({
      date: { $gte: currentDate, $lte: nextTwoWeeks }
    })
      .sort({ date: 1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const eventDetails = await Promise.all(events.map(async event => {
      const weather = await getWeather(event.cityName, event.date);
      const distance = await getDistance(latitude, longitude, event.latitude, event.longitude);

      return {
        event_name: event.eventName,
        city_name: event.cityName,
        date: event.date.toISOString().split('T')[0],
        weather: weather,
        distance_km: parseFloat(distance)
      };
    }));

    const response = {
      events: eventDetails,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      totalEvents: totalEvents,
      totalPages: totalPages
    };

    // Sending the response once
    res.json(response);
  } catch (err) {
    console.error('Error finding events:', err);
    // Sending an error response if an error occurs
    res.status(500).json({ error: 'Failed to find events' });
  }
};
