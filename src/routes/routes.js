const express = require('express');
const router = express.Router();

const {shortTheUrl, getTheMainUrl} = require('../controller/controller');

router.post('/sort-the-url', shortTheUrl);
router.get('/:urlCode', getTheMainUrl);

module.exports = router;