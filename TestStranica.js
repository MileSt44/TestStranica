"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1["default"])();
var PORT = 3000;
app.use(express_1["default"].static(path_1["default"].join(__dirname, "public")));
app.get("/", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "public", "index.html"));
});
app.get("/login", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "public", "login.html"));
});
app.get("/sample", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "public", "sample.html"));
});
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
