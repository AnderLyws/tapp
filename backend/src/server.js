const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routers');
const server = express();

mongoose.connect('mongodb+srv://Ander:Ander@cluster0-0gems.mongodb.net/tapp?retryWrites=true&w=majority',{
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);