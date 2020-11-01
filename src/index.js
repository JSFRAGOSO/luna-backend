require('dotenv').config()
const express = require ('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const SearchTrackJob = require('./jobs/index');
const http = require('http');

const cors = require('cors');
const app = express();
const server = http.Server(app); 

const { setupWebsocket } = require('./websocket.js')


setupWebsocket(server)
app.use(cors());

app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(routes);


SearchTrackJob.get()
server.listen(process.env.PORT || 3333);