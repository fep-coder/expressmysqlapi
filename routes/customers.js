var express = require("express");
var router = express.Router();
const connectionPool = require("../database/connectionPool");

// GET /customers
router.get("/", function (req, res) {
    res.send("Customers list");
});

// GET /customers/:id
router.get("/:id", function (req, res) {
    console.log("ID: ", req.params.id);
    res.sendStatus(200);
});

// PUT /customers/:id
router.put("/:id", function (req, res) {
    console.log("body: ", req.body);
    res.sendStatus(200);
});

// DELETE /customers/:id
router.delete("/:id", function (req, res) {
    console.log("ID: ", req.params.id);
    res.sendStatus(200);
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
