'use strict';

import express from 'express';
import expresshbs from 'express-handlebars';

let app = express();

app.engine('hbs', expresshbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(process.env.NODE_PORT || 3000);
