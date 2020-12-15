const messageController = require('./routes/messageController');
const models   = require('./models');
const jwtUtils = require('./utils/jwt.utils');
const asyncLib = require('async');

require('dotenv').config();

const port = process.env.PORT; 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

// Server instance
const app = express();
app.use(cors());

// Socket.io
const server = require('http').createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});


// Body Parser configuration
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

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

// Chat
io.on('connection', socket => { 
  socket.on('send_message', ({message, userToken}) => {
      console.log(message, userToken)
    const userId = jwtUtils.getUserId(userToken);

    if (userId < 0){
      return null;
    }

    if (message == null || userId == null) {
      return null;
    }
    asyncLib.waterfall([
      (done) => {
          const newMessage = models.Message.create({
            content: message,
            UserId: userId,
            ChannelId: 1,
          })
        .then((newMessage) => {
          const formatMessage = {
            id: newMessage.id,
            message: newMessage.content,
            userId: newMessage.UserId,
          }
         return io.emit('send_message', formatMessage);
        })
        .catch((err) => {
          return 'tata';
        });
        }
    ])
  });
});

server.listen(3001);

// app.listen(port);