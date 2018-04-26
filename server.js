const express = require('express');
const path = require('path');
const routes = require('./app/routes/routes.js');
const port = 8427;      // TODO: burayi duzgun bi cfg dosyasindan al veya env muhabbetini incele
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.listen(port);
console.log("Server is listening on port", port);
