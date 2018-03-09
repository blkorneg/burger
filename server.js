var express = require("express");
var bodyParser = require("body-parser");
var path = require("method-override");

var app = express();

var PORT = process.env.PORT || 8080;

//TOOD
// For serving of static CSS
app.use(express.static(__dirname + "/app/public/"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// routes

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
