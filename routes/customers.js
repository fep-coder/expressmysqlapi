var express = require("express");
var router = express.Router();
const connectionPool = require("../database/connectionPool");
const CustomerRepository = require("../database/CustomerRepository");

const repository = new CustomerRepository(connectionPool);

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
    repository.save(req.body, (err) => {
        err
            ? res.status(500).json({ error: err.toString() })
            : res.sendStatus(200);
    });
});

module.exports = router;
