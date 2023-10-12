const { Router } = require('express');
const { ui, chart, gallery, login, signup, table } = require('../controllers/user.controllers');
const rount = Router();


rount.get("/index", ui)
rount.get("/chart", chart)
rount.get("/gallery", gallery)
rount.get("/login", login)
rount.get("/signup", signup)
rount.get("/table", table)


module.exports = rount
