const express = require('express');
const ammoRouter = express.Router();
const {v4: uuid} = require('uuid');
const data = require('./data.js');

ammoRouter
    .get('/', (req, res) => res.send(data)) //GET all

module.exports = ammoRouter;