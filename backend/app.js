require('dotenv').config();

const port = process.env.PORT; 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

// Server instance
const app = express();
app.use(cors());

// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Test</h1>');
});

app.use('/api/', apiRouter);

app.listen(port);