const use = require("../models/user.schema")

const ui = (req, res) => {
    res.render("index")
}
const chart = (req, res) => {
    res.render("charts")
}
const gallery = (req, res) => {
    res.render("gallery")
}
const login = (req, res) => {
    res.render("login")
}
const signup = (req, res) => {
    res.render("register")
}
const table = (req, res) => {
    res.render("tables")
}


module.exports = { ui  ,chart ,gallery ,login ,signup ,table }
