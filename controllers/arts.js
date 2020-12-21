const Art = require('../models/art');


module.exports = {
        index,
        new: newArt,
        create,
        delete: deleteArt,
        show
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
        //req.body.dimensions = 100;
        
        Art.create(req.body, function(err, art){
        if (err){
            console.log(err)
            }
        console.log(art);
        res.redirect('/arts')})
};

function deleteArt(req, res) {
    Art.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/arts')
    })
};

function show(req, res) {
    Art.findById(req.params.id)
    .populate('favoritedBy').exec(function(err, art){
       res.render("arts/show", {title: 'Art', art, user: req.user})
    })
};


