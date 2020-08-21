// Dependencies
const path = require("path");
const express = require('express');
const app = express();

// App Sets
app.set("port", process.env.PORT || 3000);

// App EJS
app.set('view engine', 'ejs');

// App Routes
app.use("/", require("./routes/index"));
app.use(express.static(path.join(__dirname, './public')));

// App Listen
app.listen(app.get("port"), () => {
    console.log('Example app listening on port', app.get("port"));
});