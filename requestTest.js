const axios = require("axios");

const customer = {
    firstname: "Mike",
    lastname: "Jones",
    email: "mike@gmail.com",
};

axios
    .post("http://localhost:3000/customers", customer)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
