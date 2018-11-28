const express = require('express')
const exphbs = require('express-handlebars');
const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

let hello = ('hi')

app.get('/', (req, res) => {
  res.render('index', { hello: hello });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});