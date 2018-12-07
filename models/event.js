const mongoose = require('mongoose');


const events = mongoose.model('events', {
    event: String,
    description: String,
  });
  
module.exports = events;