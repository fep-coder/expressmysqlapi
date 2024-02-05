const axios = require("axios");

const customer = {
    firstname: "Mike",
    lastname: "Stevens",
    email: "mike@gmail.com",
};

axios
    // .post("http://localhost:3000/customers", customer)
    // .put("http://localhost:3000/customers/111", customer)
    .delete("http://localhost:3000/customers/111")
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
