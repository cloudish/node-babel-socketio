'use strict';
import "babel-polyfill";
import express from "express";
import path from "path";

const app = express();
const server = require('http').Server(app);
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, function() {
    console.log('Listing on port ' + port);
});