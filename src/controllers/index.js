const express = require('express');

const handleForm = require('./handleForm');

const router = express.Router();

router.get('/', (req, res) => res.send('Server side says hello world'));

router.get('/hi', (req, res) =>
  res.send({ server: 'hey react, heroku received your request' })
);

router.post('/submit-post', handleForm);

module.exports = router;
