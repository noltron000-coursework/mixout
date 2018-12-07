const express = require('express')
const app = express()

// Create Survey
app.get('/survey/new', (req, res) => {
	res.render('survey-new');
});