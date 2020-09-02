//Dependences
var express = require("express");
var app = express();
var PORT = 3000;
var dbJson = require("./db/db.json");
var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.get("/api/notes", function(req, res) {
   res.json(dbJson)
});

//creates new note
app.post("/api/notes", function(req, res) {
    dbJson.push(req.body);
    
});

// app.delete("/api/notes", function(req, res) {
//     res.sendFile
// });
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });