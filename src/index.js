const express = require("express");
const bodyParser = require("body-parser");
const callback = require("./callback");
const { invalid } = require("./controller");

const app = express();
app.use(bodyParser.json());

const API_ROOT = "";
const API_PORT = 3000;

//  RESTful Features.
//app.get(`${API_ROOT}/developers`, callback(undefined));

//  Invalid Gateway (Unsupported Feature).
app.use(callback(invalid));

app.listen(API_PORT, () => {
    console.log(`Server is listening on port ${API_PORT}.`);
});
