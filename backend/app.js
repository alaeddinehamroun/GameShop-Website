var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var timeout = require('connect-timeout')
//Mongodb
var db = require('./config/database')
var productsRouter = require('./routes/products');
var authRouter = require('./routes/auth');
var cartRouter = require('./routes/cart');
var app = express();
app.use(timeout('5s'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/api/products', productsRouter);
app.use('/api/user', authRouter);
app.use('/api/cart', cartRouter);
app.use(express.static('public'));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
