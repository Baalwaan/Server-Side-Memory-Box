const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Server side says hello world'));

router.get('/hi', (req, res) =>
  res.send({ server: 'hey react, heroku received your request' })
);

module.exports = router;
