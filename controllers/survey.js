module.exports = (app) => {
	// Show New Survey Form
	app.get('/survey/new', (req, res) => {
		res.render('survey-new.hbs');
	});

	// Create New Survey Post
	app.post('/survey/new', (req, res) => {
		res.redirect('/event');
	});
}
