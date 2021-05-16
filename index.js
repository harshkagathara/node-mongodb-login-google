require('dotenv').config()
const express = require('express');
const app = express();
const passport = require('passport');
const path = require('path');
const cookieSession = require('cookie-session')
require('./App/DB');

app.use(cookieSession({
	name: 'kagu-session',
	keys: ['key1', 'key2']
}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./App/Middleware/setup');
require('./App/Routes/routes')(app);
app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))