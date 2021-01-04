<<<<<<< HEAD
import express from 'express';
import dotenv from 'dotenv';
<<<<<<< HEAD
import bodyParser from 'body-parser';
import cors from 'cors';
=======
import rooms from './routes';
import hotel from './routes';
>>>>>>> 87686e8... room routes created

dotenv.config();

const app = express();

<<<<<<< HEAD
=======
const express = require('express')

const app = express();

const welcome = require('./routes/index');
const rooms = require('./routes/rooms');

//request routes

<<<<<<< HEAD
>>>>>>> 2127b20... created routes for rooms

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

<<<<<<< HEAD

const swaggerOptions = {
	swaggerDefinition: {
	  openapi: '3.0.0', 
	  info: {
		title: 'BareFoot Nomad Project',
		version: '1.0.0',
		description: 'Your API description'
	  },
	  basePath: '/',
	  components: {
		securitySchemes: {
		  bearerAuth: {
			type: 'http',
			scheme: 'bearer',
			in: 'header',
			bearerFormat: 'JWT',
		  }
		}
	  },
	  security: [{
		bearerAuth: []
	  }]
	},
	apis: ['./src/routes/*.js']
  };
=======
 const swaggerJsDoc = require('swagger-jsdoc');
 const swaggerUi = require('swagger-ui-express');


 const swaggerOptions = {
 	swaggerDefinition: {
 	  openapi: '3.0.0', 
 	  info: {
 		title: 'BareFoot Nomad Project',
 		version: '1.0.0',
 		description: 'Your API description'
 	  },
 	  basePath: '/',
 	  components: {
 		securitySchemes: {
 		  bearerAuth: {
 			type: 'http',
 			scheme: 'bearer',
 			in: 'header',
 			bearerFormat: 'JWT',
 		  }
 		}
 	  },
 	  security: [{
 		bearerAuth: []
 	  }]
 	},
 	apis: ['./src/routes/*.js']
   };
>>>>>>> e7fa6e2... Authentication and writes tests for protected endpoints

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 
app.use(cors())

const userRoutes = require('./routes/user');
<<<<<<< HEAD
<<<<<<< HEAD
=======
app.use(rooms);
app.use(hotel);

// app.use(json());
// app.use(urlencoded( { extended:false} ))
>>>>>>> 87686e8... room routes created
=======
=======
/*
>>>>>>> e7fa6e2... Authentication and writes tests for protected endpoints
const swaggerOptions = {
    swaggerDefinition:{
         openapi: "3.0.0",
         info:{
             version: "1.0.0",
             title:"Develloper operations on rooms ",
             description:"This API is for CRUD on rooms of hotels",
         },
         basePath: '/',
         components: {
             securitySchemes: {
               bearerAuth: {
                 type: 'http',
                 scheme: 'bearer',
                 in: 'header',
                 bearerFormat: 'JWT',
               }
             }
           },
 
            security: [{
              bearerAuth: []
               }],
 
         contacts:{
             name:"Furebo Didace",
             email:"furebodidace582@gmail.com"
         },
     },
     apis:["./src/routes/*.js"]
 }
 
 const swaggerDocs = swaggerJsDoc(swaggerOptions)
 
 app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
<<<<<<< HEAD

>>>>>>> 2127b20... created routes for rooms
=======
*/
>>>>>>> e7fa6e2... Authentication and writes tests for protected endpoints
=======

>>>>>>> 4440503... Authentication and writes tests for protected endpoints


<<<<<<< HEAD
<<<<<<< HEAD
app.use('/user', userRoutes);

export default app;
=======
>>>>>>> 2127b20... created routes for rooms

=======
>>>>>>> 771fdbf... Implementation for room  CRUD operations
 app.use(express.json());

app.use('/api', welcome);
app.use(rooms);
const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
