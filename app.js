const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Init app
const app = express();

const port = 3003;

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});