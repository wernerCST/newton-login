const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();

app.use('/api/v1/users', userRouter);




const port = 3000;
app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
