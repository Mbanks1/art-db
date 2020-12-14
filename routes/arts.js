var express = require('express');

var router = express.Router();

const artCtrl = require('../controllers/arts');


router.get('/', artCtrl.index);