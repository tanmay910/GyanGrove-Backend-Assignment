const request = require('request-promise-native');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


// const express = require('express');
// const app = express();
API_KEY_weather = process.env.API_KEY_weather;
API_KEY_Distance = process.env.API_KEY_Distance;

async function getWeather(city, date) {
    try {
    
        const formattedDate = date.toISOString().split('T')[0];

        const url = `https://gg-backend-assignment.azurewebsites.net/api/Weather?code=${API_KEY_weather}==&city=${city}&date=${formattedDate}`;

        const response = await axios.get(url);
        return response.data.weather;
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw error; // Propagate the error
    }
}


async function getDistance(lat1, lon1, lat2, lon2) {
    try {
 
        const url = `https://gg-backend-assignment.azurewebsites.net/api/Distance?code=${API_KEY_Distance}==&latitude1=${lat1}&longitude1=${lon1}&latitude2=${lat2}&longitude2=${lon2}`;

        const response = await axios.get(url);
        return response.data.distance;
    } catch (error) {
        console.error('Error fetching distance:', error);
        throw error; // Propagate the error
    }
}


module.exports = { getWeather, getDistance };






