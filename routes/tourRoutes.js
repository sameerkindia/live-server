const fs = require('fs');
const express = require('express');

const tourControllers = require('./../controllers/tourControllers');

const tourRoute = express.Router();

tourRoute.param('id', tourControllers.checkId);

tourRoute
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.checkRequestBody, tourControllers.addNewTour);
tourRoute
  .route('/:id')
  .get(tourControllers.getOneTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = tourRoute;
