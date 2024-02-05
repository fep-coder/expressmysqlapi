var express = require("express");
var router = express.Router();
const mysql = require("mysql");

// GET /customers
router.get("/", function (req, res) {
    const dbconfig = require("../database/dbconfig");

    const db = mysql.createConnection(dbconfig);

    db.connect((err) => {
        if (err) throw err;

        const customer = {
            firstname: "Mike",
            lastname: "Jones",
            email: "mike@gmail.com",
        };

        db.query("insert into customers set ?", customer, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });

    res.send("Customers list");
});

module.exports = router;
