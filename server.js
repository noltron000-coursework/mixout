// adding requirements
const express = require('express')
const exprHBS = require('express-handlebars');
const bodyParse = require('body-parser');
const exprValid = require('express-validator');
// setting up mongo server

// initializing variables
const app = express();
const port = 3000;

// set up handlebars
app.engine('.hbs', exprHBS({
	extname: '.hbs',
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// use body parser
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// use validator - adding after parser init!
app.use(exprValid());

// // use method override - with POST having ?_method=DELETE or ?_method=PUT
// app.use(express.static('public'));
// app.use(methodOverride('_method'));

// use static folder - accessible at root from anywhere
app.use(express.static('static'))

// require routes
const events = require('./controllers/events.js')(app);
const surveys = require('./controllers/surveys.js')(app);

// landing page
app.get('/', (req, res) => {
	res.render('home');
});

// listen on port 3000
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
});