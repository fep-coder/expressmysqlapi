var express = require("express");
var router = express.Router();
const connectionPool = require("../database/connectionPool");

// GET /customers
router.get("/", function (req, res) {
    res.send("Customers list");
});

// POST /customers
router.post("/", function (req, res) {
    // console.log("post body", req.body);

    connectionPool
        .getPool()
        .query("insert into customers set ?", req.body, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
});

module.exports = router;
