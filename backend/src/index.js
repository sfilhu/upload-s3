require('dotenv').config();
const express = require('express');
const morgam  = require('morgan');
const mongoose = require('mongoose');

const app = express();

const path = require('path')

// Connect database
mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
    }
);

app
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(morgam('dev'))
.use(require('./routes'))
.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.listen(3001);