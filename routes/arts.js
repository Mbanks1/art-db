var express = require('express');
var router = express.Router();
const artCtrl = require('../controllers/arts');


router.get('/', isLoggedIn, artCtrl.index);
router.get('/new',isLoggedIn, artCtrl.new);
router.post('/', isLoggedIn, artCtrl.create);
router.delete('/:id', isLoggedIn,artCtrl.delete)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  };

module.exports = router;
