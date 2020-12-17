import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const Requests = require('./routes/requestRoute');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();


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

app.get('/', (req, res) => {
  // res.json({ status: 'success', message: 'Welcome to my serverrrrrrre' });
  res.json({ message: 'WELCOME TO SEQUELIZE-POSTGRES API' });
});
 
// request middleware
app.use(express.json());
app.use('/Request',Requests);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000; 
 
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;