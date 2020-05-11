const router = require('express').Router();
const controller = require('./controller.js');


  router
    .route('/')
    .get(controller.get)

  router
    .route('/photos')
    .get(controller.getPhotos)


  router
    .route('/colors')
    .get(controller.getColors)


module.exports = router




