const router = require('express').Router();
const controller = require('../controller/index');

router.get('/get',controller.get);
router.post('/post',controller.post);

module.exports = router;
