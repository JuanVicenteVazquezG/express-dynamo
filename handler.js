'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('Hola Mundo con ExpressJS');
});

module.exports.generic = serverless(app);