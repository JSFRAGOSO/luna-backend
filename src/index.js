require('dotenv').config()
const express = require ('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const SearchTrackJob = require('./jobs/index');
const http = require('http');

const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = http.Server(app); 

const { setupWebsocket } = require('./websocket.js')


setupWebsocket(server)
app.use(cors());

mongoose.connect(process.env.MONGO || 'mongodb+srv://admin:admin@cluster0-ac3fq.mongodb.net/luna?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)
mongoose.set('useCreateIndex', true);


app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(routes);


SearchTrackJob.get()
server.listen(process.env.PORT || 3333);