require('dotenv').config()
const express = require ('express');
const routes = require('./routes')
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(routes);


app.listen(process.env.PORT || 3333);