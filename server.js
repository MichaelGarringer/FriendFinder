//Dependency for express
var express = require("express");


var app = express();

//Define port
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routing
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
//Run the PORT 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
