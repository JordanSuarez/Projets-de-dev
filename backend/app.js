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
    origin: "*",
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
  response.header('Access-Control-Expose-Headers', 'X-Total-Count');
  
  next();
});


app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Test</h1>');
});

app.use('/api/', apiRouter);

// Chat
io.on('connection', socket => { 
  socket.on('send_message', ({message, userToken, username, userImage}) => {
    const userId = jwtUtils.getUserId(userToken);

    if (userId < 0){
      return null;
    }

    if (message == null || userId == null) {
      return null;
    }


    models.User.findOne({
      where: { id: userId },
      attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email', 'bio', 'createdAt'],},
    }).then((user) => {
      const newMessage = models.Message.create({
        content: message,
        UserId: userId,
        ChannelId: 1,
      })
      .then((newMessage) => {
        const formatMessage = {
          User: {
            id: userId,
            userImage: userImage,
            username: username,
          },
          id: newMessage.id,
          content: newMessage.content,
          userId: newMessage.UserId,
          createdAt: newMessage.createdAt,
        }
        return io.emit('send_message', formatMessage);
      })
      .catch((err) => {
        return 'tata';
      });
    }).catch((err) => {
      return 'tata';
    });
  });
});

server.listen(port);
