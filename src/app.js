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
=======
app.use(rooms);
app.use(hotel);

// app.use(json());
// app.use(urlencoded( { extended:false} ))
>>>>>>> 87686e8... room routes created

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});

app.use('/user', userRoutes);

export default app;


