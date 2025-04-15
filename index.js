const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const lightRouter = require('./light/light.router.js');
app.use('/light', lightRouter);
app.get('/', (request, response) => response.redirect('/light'));
app.use(express.static(__dirname));
app.listen(8080, () => console.log('Server listen on port 8080'));