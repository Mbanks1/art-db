const Art = require('../models/art')

module.exports = {
  create
}

function create(req, res) {
  Art.findById(req.params.id)
  .then((art) => {
    art.reviews.push(req.body)
    art.save()
    .then(() => {
      res.redirect(`/arts/${art._id}`)
    })
  })
};

