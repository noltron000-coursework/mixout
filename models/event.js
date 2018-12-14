const mongoose = require('mongoose');

const events = mongoose.model('events', {
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports = events;