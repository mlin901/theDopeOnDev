// const path = require('path');
// const express = require('express');
// const exphbs = require('express-handlebars');

// const app = express();
// const PORT = process.env.PORT || 3003;

// const sequelize = require('./config/connection');

// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3003;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });   // **** may eventually need the "helpers" bit?
// const hbs = exphbs.create({ });

const sess = {
  // secret: process.env.SESS_SECRET, // *******Does this work?
  secret: 'somesecret',
  cookie: {
    maxAge: 10 * 60 * 1000  // Times out after 10 minutes
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Tell Express.js which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
