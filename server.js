require('dotenv').config();
require('./config/database'); // connects to db
const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

// * All other routes
app.use('/api/users', require('./routes/api/users'));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})