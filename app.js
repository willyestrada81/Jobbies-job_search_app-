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
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
 
//HOME PAGE
app.get('/', (req, res) => res.render('landing'));

//Jobs Route
app.use('/', require('./routes/jobs'));

const PORT = process.env.PORT || 3000;

app.listen(PORT , console.log(`Server running on port ${PORT}`)) 