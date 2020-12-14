const Art = require('../models/art');


module.exports = {
        index,
        new: newArt,
        create
};


function index(req,res){
    Art.find({}, function(err, arts){
    res.render('arts/index', {arts})
    })
};



function newArt(req,res) {
    res.render('arts/new')
};

function create(req, res ) {
    
    Art.create(req.body, function(err, art){
        console.log(art)

    res.redirect('/arts')})
};