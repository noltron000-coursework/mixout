// adding requirements
const express = require('express')
const exprHBS = require('express-handlebars');
const bodyParse = require('body-parser');
const exprValid = require('express-validator');

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


//INDEX
app.get('/', (req, res) => {
	res.render('home');
});

// NEW
app.get('/../new', (req, res) => {
  res.render('..', {});
  });
  
  // SHOW
  app.get('/../:id', (req, res) => {
      events.findById(req.params.id).then(events => {
        Comment.find({ reviewId: req.params.id }).then(events => {
          res.render('..',)
        })
      }).catch((err) => {
        console.log(err.message)
      });
    });
  
  // EDIT
  app.get('/../:id/edit', (req, res) => {
  events.findById(req.params.id, function(err, review) {
      res.render('..', {review: review});
  })
  });
  
  // UPDATE
  app.put('/../:id', (req, res) => {
  events.findByIdAndUpdate(req.params.id, req.body)
      .then(events => {
      res.redirect(`/../${events._id}`)
      })
      .catch(err => {
      console.log(err.message)
      })
  });
  
  // DELETE
  app.delete('/../:id', function (req, res) {
  console.log("DELETE event")
  events.findByIdAndRemove(req.params.id).then((event) => {
      res.redirect('/');
  }).catch((err) => {
      console.log(err.message);
  })
  });

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
});