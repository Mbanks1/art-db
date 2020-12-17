const Art = require('../models/art');


module.exports = {
        index,
        new: newArt,
        create
};


function index(req,res){
    Art.find({}, function(err, arts){
    res.render('arts/index', {arts, user: req.user})
    })
};


function newArt(req,res) {
    res.render('arts/new', {user: req.user})
};


function create(req, res ) {
     Art.create(req.body, function(err, art){
        console.log(req.body)
res.redirect('/arts')})
};