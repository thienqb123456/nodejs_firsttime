const path = require('path');
const handlebars = require('express-handlebars').engine;
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes/index.route.js');
const db = require('./config/db');
const methodOverride = require('method-override');

//Connect to DB
db.connect();

// public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(methodOverride('_method'));

// Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

//Routes init
route(app);

// HTTP Logger
app.use(morgan('combined'));

app.listen(port, () => {
    console.log(`App listening at localhost:${port}`);
});
