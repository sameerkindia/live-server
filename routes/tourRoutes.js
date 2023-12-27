const express = require('express');

const tourControllers = require('./../controllers/tourControllers');

const tourRoute = express.Router();

tourRoute
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);
tourRoute
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = tourRoute;
