const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

// Server instance
const app = express();

// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Test</h1>');
});

app.use('/api/', apiRouter);

app.listen(6000);