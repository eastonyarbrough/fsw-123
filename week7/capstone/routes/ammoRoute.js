const express = require('express');
const ammoRouter = express.Router();
const {v4: uuid} = require('uuid');
const data = require('./data.js');

ammoRouter
    .get('/', (req, res) => res.send(data)) //GET all

    .get('/search/name', (req, res) => {
        const userQuery = req.query.name;
        const filtered = data.filter(e => e.name.toLowerCase().replace(' ', '').includes(userQuery.toLowerCase().replace(' ', '')));
        res.send(filtered);
    }) //GET query name

module.exports = ammoRouter;