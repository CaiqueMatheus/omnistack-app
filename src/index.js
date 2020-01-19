const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

console.log('Database Connected');

app.use(express.json());
app.use(routes);
app.listen(3333);
