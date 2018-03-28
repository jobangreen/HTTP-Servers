const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Simple Server is running on port 3000")
});

app.post('/', function (req, res) {
    console.log(req.headers)
    res.status("200")
    res.send("Data can be created using this method (POST).")
    console.log("POST was called")

});

app.get('/', function (req, res) {
    console.log(req.headers)
    res.status("200")
    res.send("GET is used to read information.")
    console.log("GET was called")
});

app.put('/', function (req, res) {
    console.log(req.headers)
    res.status("200")
    res.send("Use this (PUT) to update information.")
    console.log("PUT was called")
});

app.delete('/', function (req, res) {
    console.log(req.headers)
    res.send("Only use DELETE to remove the specified target.")
    console.log("DELETE was called")
});