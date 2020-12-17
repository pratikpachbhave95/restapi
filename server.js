import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/connectDB.js';
import restapiRoutes from './routes/restapiRoutes.js';

//DotENV Config
dotenv.config();


//Extracting the Variables
const { PORT, NODE_ENV } = process.env;

//Async IIFE
(async () => {

    //Connect to the DB
    await connectDB();

    //Express app initialization
    const app = express();

    //add middlewares
    if(NODE_ENV == 'development')app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

   //Forwarding routes from /react/restapi to the todocontrollers
   app.use('/react/restapi', restapiRoutes);    //Primary route hitter

    //Listening for request
    app.listen(PORT, () => {
        console.log(`server up and running in ${NODE_ENV} mode, and is listening for request on http://localhost:${PORT}/`);
    });

})();

