var express= require("express");
var path= require("path");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/" , function(req, res){
    res.sendFile(path.join(__dirname, "./public/home.html"))
});

friendsList = []

app.get("/survey",function(req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"))
});
app.get("/api/data/friends", function(req, res) {
    var newFriend = req.body;

    friendsList.push(newFriend)
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
