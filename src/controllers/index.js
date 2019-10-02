const express = require('express');

const handleForm = require('./handleForm');
const handleGetMemories = require('./handleGetMemories');

const router = express.Router();

router.get('/', (req, res) => res.send('Server side says hello world'));
router.post('/submit-post', handleForm);
router.post('/get-memories', handleGetMemories);

module.exports = router;
