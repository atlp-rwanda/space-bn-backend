
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const welcome = require('./routes/index');
const rooms = require('./routes/rooms');

//request routes

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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

const userRoutes = require('./routes/user');

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


 app.use(express.json());

app.use('/user', userRoutes);

app.use('/api', welcome);
app.use(rooms);

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
