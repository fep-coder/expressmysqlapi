var express = require("express");
var router = express.Router();
const connectionPool = require("../database/connectionPool");

// GET /customers
router.get("/", function (req, res) {
    const customer = {
        firstname: "Mike",
        lastname: "Jones",
        email: "mike@gmail.com",
    };

    connectionPool
        .getPool()
        .query("insert into customers set ?", customer, (err, result) => {
            if (err) throw err;
            console.log(result);
        });

    res.send("Customers list");
});

module.exports = router;
