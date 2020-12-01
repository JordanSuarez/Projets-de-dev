const express = require('express');
const app = express();

const routeTest = require('./routes/test')

app.use('/', routeTest);

app.listen(3000);