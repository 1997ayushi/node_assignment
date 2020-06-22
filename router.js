var router = require('express').Router();
var commonFunction = require('./commonFunction');

router.post('/value',commonFunction.value);

module.exports = router;
