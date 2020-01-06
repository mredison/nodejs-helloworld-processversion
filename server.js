const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) { res.send("NodeJS Process environment: " + process.env.NODE_ENV)});
app.listen(port, () => console.log('Example app listening on port 3000!'));
