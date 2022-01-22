const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

var items = ["Buy Food", "Learn courses"];
var workitem = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let today = new Date();

    var options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render('list', { daye: day, newListItem: items });

});
app.post("/", function(req, res) {
    var item = req.body.newItem;
    if (req.body.list === "Work") {
        workitem.push(item);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render('list', { daye: "Work", newListItem: workitem });
});

app.post("/work", function(req, res) {
    var witem = req.body.newItem;
    workitem.push(witem);
    res.redirect("/work");

});



app.listen(1000, function() {
    console.log("Server started on port 1000.");
});