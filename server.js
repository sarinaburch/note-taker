//Dependences
var express = require("express");
var app = express();
var PORT = 3000;
var dbJson = require("./db/db.json");
var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


var notes = "hey"

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"));
});
app.get("/api/notes", function(req, res) {
    res.json(dbJson)
})
app.post("/notes:id", function(req, res) {
    var notes = req.body;
});
app.delete("/api/notes", function(req, res) {
    res.sendFile
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"))
});
//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });