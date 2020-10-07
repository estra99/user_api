"use strict";
exports.__esModule = true;
var express = require("express");
var logger_1 = require("../logger/logger");
var app = express();
var logger = new logger_1.Logger();
// array to hold users
var users = [{ firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' }];
// request to get all the users
app.get('/users', function (req, res) {
    logger.info('users route');
    res.json(users);
});
// request to get all the users by userName
app.get('/users/:userName', function (req, res) {
    logger.info("filter users by username:::::" + req.params.userName);
    var user = users.filter(function (usr) { return req.params.userName === usr.userName; });
    res.json(user);
});
// request to post the user
// req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post('/user', function (req, res) {
    users.push(req.body);
    res.json(users);
});
exports["default"] = app;
