var express = require("express");
const path  = require('path');

var app = express();

var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static( 'public'))
app.use('/api/notes', require('./routes/apiRoutes'))
app.use('/', require("./routes/htmlRoutes"))

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
