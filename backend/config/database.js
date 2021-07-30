require('dotenv').config();
var mongoose = require('mongoose');

var mongoDB = process.env.DATABASE_URL;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Get the default connection
var db = mongoose.connection;
db.on('connected', function() {
    console.log('database is connected successfully');
});
db.on('disconnected',function(){
    console.log('database is disconnected successfully');
})