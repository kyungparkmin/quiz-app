const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./routes/index');

const app = express();

const { sequelize } = require('./models');
sequelize.sync();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);


app.listen(3002, () => {
  console.log('app listening on 3002');
})
