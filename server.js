require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./app/routes/routes.js');
const PORT = process.env.PORT || 8427;
var app = express();

app.use("/static", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(routes);
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
