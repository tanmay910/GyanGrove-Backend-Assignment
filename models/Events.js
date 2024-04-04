// eventModel.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  cityName: String,
  date: Date,
  time: String,
  latitude: Number,
  longitude: Number
});


eventSchema.index({ date: 1 });
eventSchema.index({ latitude: 1, longitude: 1 });
module.exports = mongoose.model('Event', eventSchema);
 


