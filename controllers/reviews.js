const Art = require('../models/art')

module.exports = {
  create,
  delete: deleteReview
}

function create(req, res) {
  Art.findById(req.params.id)
  .then((art) => {
    console.log(art)
    art.reviews.push(req.body)
    art.save()
    .then(() => {
      res.redirect(`/arts/${art._id}`)
    })
  })
};

function deleteReview(req, res) {
    Art.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/arts')
    })
};


