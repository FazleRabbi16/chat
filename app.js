//External imports
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
//Internal imports
const {notFoundHandler,errorHandler} = require('./middleware/common/errorHandler');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');
//env file confit
dotenv.config();
// view engine set
app.set('view engine', 'ejs');
// public path set
app.use(express.static(path.join(__dirname, 'public')));
// db connection
const dbConnect = async()=>{
    try {
     await mongoose.connect('mongodb://localhost:27017/chat');
     console.log('Database connected');
    } catch (error) {
      console.log( `Database connected failed ${error.message}`);
    }
  } 
//request parser  
app.use(express.json());
app.use(express.urlencoded());
//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));
//route setup
app.use('/',loginRouter);
app.use('/users',usersRouter);
app.use('/inbox',inboxRouter);
//404 not found handler
app.use(notFoundHandler);
app.use(errorHandler);
// run server
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  dbConnect();
});