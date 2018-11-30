require('newrelic');
const router = require('express').Router();
const controller = require('../controllers/main');

router
  .route('/product')
  .get(controller.get)
  .delete(controller.delete);

module.exports = router;
