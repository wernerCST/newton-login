const express = require('express');

const userRouter = require('./routes/userRouter');
const codeRouter = require('./routes/codeRouter');
const app = express();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/codeverification', codeRouter);


module.exports = app;
