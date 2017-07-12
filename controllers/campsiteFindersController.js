const mongoose = require('mongoose')
const CampsiteFinder = mongoose.model('CampsiteFinders')

exports.listAllCampsiteFinders = (req, res) => {
  CampsiteFinder.find({})
    .populate('campgroundId')
    .then(campsiteFinders => res.json(campsiteFinders))
    .catch(err => res.send(err))
}

exports.createCampsiteFinder = (req, res) => {
  const campsiteFinder = new CampsiteFinder(req.body)
  campsiteFinder
    .save()
    .then(campsiteFinder => res.json(campsiteFinder))
    .catch(err => res.send(err))
}

exports.updateCampsiteFinder = (req, res) => {
  CampsiteFinder.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(campsiteFinder => {
      res.json(campsiteFinder)
    })
    .catch(err => res.send(err))
}

exports.deleteCampsiteFinder = (req, res) => {
  CampsiteFinder.remove({ _id: req.params.id })
    .then(() => res.json({ message: 'successfully deleted' }))
    .catch(err => res.send(err))
}
