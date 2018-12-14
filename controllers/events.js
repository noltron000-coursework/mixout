const Event = require('../models/event');

module.exports = (app) => {
	// INDEX events
	app.get('/event', (req, res) => {
		res.render('events-index');
	});

	// NEW events
	app.get('/event/new', (req, res) => {
		res.render('events-new', {});
	});

	// CREATE events
	app.post('/event/new', (req, res) => {
		const event = new Event(req.body);
		event
			.save()
			.then(() => {
				res.redirect('/event');
			})
			.catch((err) => {
				console.error(err);
			});
	});

	// SHOW events
	app.get('/event/:id', (req, res) => {
		events.findById(req.params.id)
			.then((events) => {
				events
					.find({ reviewId: req.params.id })
					.then((event) => {
						res.render('events-show')
					});
			}).catch((err) => {
				console.log(err.message);
			});
	});

	// EDIT events
	app.get('/event/:id/edit', (req, res) => {
		events.findById(req.params.id, (err, review) => {
			res.render('events-edit', { review: review });
		});
	});

	// UPDATE events
	app.put('/event/:id', (req, res) => {
		events.findByIdAndUpdate(req.params.id, req.body).then((event) => {
			res.redirect(`/event/${event._id}`);
		}).catch((err) => {
			console.log(err.message);
		});
	});

	// DELETE events
	app.delete('/event/:id', (req, res) => {
		console.log("DELETE event");
		events.findByIdAndRemove(req.params.id).then((event) => {
			res.redirect('/');
		}).catch((err) => {
			console.log(err.message);
		});
	});
}
