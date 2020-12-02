"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = require("swagger-ui-express");

/* eslint-disable linebreak-style */
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
var swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Bare foot nomad project',
      version: '1.0.0',
      description: 'API for Bare Foot Nomad Project'
    },
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          "in": 'header',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['src/utils/index.js']
};
var swaggerDocs = (0, _swaggerJsdoc["default"])(swaggerOptions);
app.use('/api-docs', _swaggerUiExpress.serve, (0, _swaggerUiExpress.setup)(swaggerDocs));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
/**
 * @swagger
 * /welcome:
 *   get:
 *     summary: returns a welcome message
 *     tags:
 *       - Welcome
 *     description: Returns a welcome message
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A succesful response
 *       500:
 *         description: SERVER ERROR
 */

app.get('/welcome', function (req, res) {
  res.send('Welcome to my rest api!');
});
app.listen(port, function () {
  console.log("app listening at http://localhost:".concat(port));
});