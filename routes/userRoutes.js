const express = require('express');
const userControllers = require('./../controllers/userControllers');
const userRoute = express.Router();

userRoute
  .route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);
userRoute
  .route('/:id')
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = userRoute;
