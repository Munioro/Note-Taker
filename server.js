var express = require("express");
const path  = require('path');

var app = express();

var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
});
app.get("/assets/js/index.js", (req, res) => res.sendFile(path.join(__dirname, 'public/assets/js', 'index.js')));
app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, 'db', 'db.json')));
app.post("/api/notes", (req, res) => {
    res.send(req.body);
});
app.delete("/api/notes", (req, res) => res.sendFile(path.join(__dirname, 'db', 'db.json')));


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
