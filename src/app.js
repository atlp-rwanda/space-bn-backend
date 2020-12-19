const express = require('express');
const Requests = require('./routes/requestRoute');

const app = express();
 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition:{
         openapi: "3.0.0",
         info:{
             version: "1.0.0",
             title:"API FOR NOMADS FACILITIES BOOKING",
             description:" Bookings operations",
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
             name:"Jemima Nyirasafari",
             email:"jemmyarina@gmail.com"
         },
     },
     apis:["./src/routes/*.js"]
 }

 const swaggerDocs = swaggerJsDoc(swaggerOptions)

 app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))




app.get('/', (req, res) => {
  // res.json({ status: 'success', message: 'Welcome to my serverrrrrrre' });
  res.json({ message: 'WELCOME TO SEQUELIZE-POSTGRES API' });
});
 
// request middleware
app.use(express.json());
app.use('/',Requests);

const PORT = process.env.PORT || 5000; 
 
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;