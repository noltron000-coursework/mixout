const Events = require('../models/event');

module.exports = (app) => {
	// INDEX events
	app.get('/events', (req, res) => {
		res.render('events-index');
	});

	// NEW events
	app.get('/../new', (req, res) => {
		res.render('..', {});
	});

	// SHOW events
	app.get('/../:id', (req, res) => {
		events.findById(req.params.id).then((events) => {
			Comment.find({ reviewId: req.params.id }).then((events) => {
				res.render('..')
			});
		}).catch((err) => {
			console.log(err.message);
		});
	});

	// EDIT events
	app.get('/../:id/edit', (req, res) => {
		events.findById(req.params.id, (err, review) => {
			res.render('..', { review: review });
		});
	});

	// UPDATE events
	app.put('/../:id', (req, res) => {
		events.findByIdAndUpdate(req.params.id, req.body).then((events) => {
			res.redirect(`/../${events._id}`);
		}).catch((err) => {
			console.log(err.message);
		});
	});

	// DELETE events
	app.delete('/../:id', (req, res) => {
		console.log("DELETE event");
		events.findByIdAndRemove(req.params.id).then((event) => {
			res.redirect('/');
		}).catch((err) => {
			console.log(err.message);
		});
	});
}