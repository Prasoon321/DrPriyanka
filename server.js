const path = require('path')
const express = require('express');
const dotenv = require("dotenv")
dotenv.config();
const app = express();
app.use(express.json())
const port = 4000;
const axios = require("axios")
const cors = require("cors")

// const form = require('./routes/formData')
app.use(cors());
// static file 

app.use(express.static(path.join(__dirname, "public")))
// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to render your EJS file
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/about', (req, res) => {
    res.render('about.ejs');
});
app.get('/services', (req, res) => {
    res.render('services.ejs');
});
app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});
app.get('/blog', (req, res) => {
    res.render('blog.ejs');
});
app.get('/contat', (req, res) => {
    res.render('contact.ejs');
});
app.get('/building-self-esteem-foundation-mental-well-being', (req, res) => {
    res.render('building-self-esteem-foundation-mental-well-being.ejs');
});
// app.use('/form', form)


// ftechvisadata()
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

