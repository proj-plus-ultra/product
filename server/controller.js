const dbHelpers = require('../database/dbHelpers.js')

const controller = {
  get: (req, res) => {
    dbHelpers.get((err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  getPhotos: (req, res) => {
    const {id} = req.params

    dbHelpers.getPhotos(id, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  getColors: (req, res) => {
    dbHelpers.getColors((err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  }


}

module.exports = controller;