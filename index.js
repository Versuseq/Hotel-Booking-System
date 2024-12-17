const session = require('express-session');
const express = require('express');
const dotenv = require('dotenv').config();
const bcypt = require('bcrypt');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const SQLiteStore = require('connect-sqlite3')(session);
const Routes = require('./routes/Routes.js');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1"
const store = new SQLiteStore({
    db: 'sessions.sqlite',
    dir: path.resolve(__dirname,'database')
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
    store,
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    maxAge: 30 * 24 * 60 * 60 * 1000
}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(Routes);


app.listen(port, host, () => {
    console.log(`Server running at ${host}:${port}`);
})