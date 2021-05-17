require('dotenv').config();
require('./configs/database.config')
const axios = require('axios');

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const app          = express();
const cors         = require('cors')


app.use(session({
  secret: 'plaundry-project',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 60*60*24*1000*14
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 *14,
    autoRemove: 'disabled',
  })
}));  

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// Middleware Setup
app.use(logger('dev'));
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))

app.use(bodyParser.json({limit: '200mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}))
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

const authRoutes = require('./routes/auth.routes')
app.use('/api', authRoutes);

const complexRoutes = require('./routes/complex.routes')
app.use('/api', complexRoutes);

const laundriesRoutes = require('./routes/laundries.routes')
app.use('/api', laundriesRoutes);

const ordersRoutes = require('./routes/orders.routes')
app.use('/api', ordersRoutes);
const rfidRoutes = require('./routes/rfid.routes')
app.use('/api', rfidRoutes);

const index = require('./routes/index');
app.use('/', index);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});


module.exports = app;
