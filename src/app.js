import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import rooms from './routes';
import hotel from './routes';

dotenv.config();
const app = express();

const welcome = require('./routes/index');
const rooms = require('./routes/rooms');

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
app.use(cors())

const userRoutes = require('./routes/user');
app.use(rooms);
app.use(hotel);

app.use('/user', userRoutes);

app.use(express.json());

app.use('/api', welcome);

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
