const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'rsc\\views'));

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});