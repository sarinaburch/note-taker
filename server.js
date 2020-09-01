//Dependences
var express = require("express");
var app = express();
var PORT = 3000;

var notes = "hey"
//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"));
});
app.get("/api/notes", function(req, res) {
    return res.json(notes);
});
app.post("/api/notes:id", function(req, res) {
    console.log(req.body)
});
app.delete("/api/notes", function(req, res) {
    res.sendFile
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});
//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });