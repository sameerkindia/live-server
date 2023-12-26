const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();

app.use(express.static('./public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;

// mongodb+srv://sameerkhanmm355:jV0y7pH2rSWxpYt0@cluster0.yjesxxm.mongodb.net/?retryWrites=true&w=majority
