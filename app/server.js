var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

require('./routing/apiRoutes')(app, path);
require('./routing/htmlRoutes')(app, path);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// nodemon server.js localhost 3000
// TypeError: require(...) is not a function
