const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express()

//connet to mongodb
const dbURI = 'mongodb+srv://stabi1602:SGzlBZhfZKGiB0Ux@talia-node.c3pcs9m.mongodb.net/talia';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

//register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about',  (req, res) => {
    res.render('about', {title: 'About'});
});


//blog routes
app.use('/blogs', blogRoutes);

//404
app.use((req, res) =>{
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
})