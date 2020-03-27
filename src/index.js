const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//security module (allowing any at this moment)
app.use(cors());

app.use(express.json());
app.use(routes);

let port = process.env.PORT || 3333;
app.listen(port);