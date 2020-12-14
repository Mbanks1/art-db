var express = require('express');
var router = express.Router();
const artCtrl = require('../controllers/arts');


router.get('/', artCtrl.index);
router.get('/new', artCtrl.new);
router.post('/', artCtrl.create);


module.exports = router;
