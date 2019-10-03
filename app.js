const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/database')
//Test the DB
db
    .authenticate()
    .then(() => {
        console.log('Connection to DB has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const app = express();

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('INDEX'));

//Jobs Route
app.use('/jobs', require('./routes/jobs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server running on port ${PORT}`))