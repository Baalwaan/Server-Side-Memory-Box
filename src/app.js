const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const controllers = require('./controllers/index');
const app = express();

//come back to this when deploying to heroku
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(controllers);

module.exports = app;
