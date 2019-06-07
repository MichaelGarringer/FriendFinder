//Dependency for express
var express = require("express");
var path = require("path")
var app = express();

//Define port
var PORT = process.env.PORT || 3030;
//Access to CSS
app.use(express.static(path.join(__dirname, './app')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routing
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
//Run the PORT 
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
