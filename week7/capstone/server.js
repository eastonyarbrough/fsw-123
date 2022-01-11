const express = require('express');
const app = express();
const ammoRouter = require('./routes/ammoRoute.js');

const PORT = 9000;

app.use(express.json());
app.use('/ammo', ammoRouter)

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))