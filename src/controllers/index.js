const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Server side says hello world'));

module.exports = router;
