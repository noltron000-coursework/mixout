const express = require('express')
const app = express()
const events = require('../models/event');

module.exports = (app) => {
	// INDEX events
	app.get('/events', (req, res) => {
		res.render('events-index');
	});

	// NEW events
	app.get('/events/new', (req, res) => {
		res.render('events-new', {});
	});

	// SHOW events
	app.get('/events/:id', (req, res) => {
		events.findById(req.params.id).then((events) => {
			event.find({ reviewId: req.params.id }).then((events) => {
				res.render('events-show')
			});
		}).catch((err) => {
			console.log(err.message);
		});
	});

	// EDIT events
	app.get('/events/:id/edit', (req, res) => {
		events.findById(req.params.id, (err, review) => {
			res.render('events-edit', { review: review });
		});
	});

	// UPDATE events
	app.put('/events/:id', (req, res) => {
		events.findByIdAndUpdate(req.params.id, req.body).then((events) => {
			res.redirect(`/events/${events._id}`);
		}).catch((err) => {
			console.log(err.message);
		});
	});

	// DELETE events
	app.delete('/events/:id', (req, res) => {
		console.log("DELETE event");
		events.findByIdAndRemove(req.params.id).then((event) => {
			res.redirect('/');
		}).catch((err) => {
			console.log(err.message);
		});
	});
}

module.exports = app;