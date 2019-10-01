const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./app/routing/apiRoutes')(app, path);
require('./app/routing/htmlRoutes')(app, path);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
