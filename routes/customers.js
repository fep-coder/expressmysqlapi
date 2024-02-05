var express = require("express");
var router = express.Router();
const mysql = require("mysql");

// GET /customers
router.get("/", function (req, res) {
    const dbconfig = require("../dbconfig");

    const db = mysql.createConnection(dbconfig);

    db.connect((err) => {
        if (err) throw err;
        console.log("Connected");
    });

    res.send("Customers list");
});

module.exports = router;
