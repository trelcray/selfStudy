const express = require('express');

const app = express();

app.listen('8081');

//middleware
app.use(express.json());

app.route('/').post( (req, res) => res.send(req.body));
