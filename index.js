// Dependencies
const path = require("path");
const express = require('express');
const app = express();

// Dotenv Config
const dotenv = require("dotenv");
dotenv.config({ path: ".env" })

// App Port
app.set("port", process.env.PORT || 3000);

// App View Engine
app.set('view engine', 'ejs');

// App Bodyparser
app.use(express.urlencoded({ extended: false }));

// App Routes
app.use("/", require("./routes/index"));

// App Public Route
app.use(express.static(path.join(__dirname, './public')));

// App Initialization
app.listen(app.get("port"), () => {
    console.log('App on, listening on port', app.get("port"));
});