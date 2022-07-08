const express = require("express");
const bodyParser = require("body-parser");
const callback = require("./callback");
const { getDev, postDev, patchDev, deleteDev, invalid } = require("./http-controller");

const app = express();
app.use(bodyParser.json());

const API_ROOT = "";
const API_PORT = 3000;

//  RESTful Features.
app.get(`${API_ROOT}/dev`, callback(getDev));
app.get(`${API_ROOT}/dev/:id`, callback(getDev));
app.post(`${API_ROOT}/dev`, callback(postDev));
app.patch(`${API_ROOT}/dev/:id`, callback(patchDev));
app.delete(`${API_ROOT}/dev/:id`, callback(deleteDev));

//  Invalid Gateway (Unsupported Feature).
app.use(callback(invalid));

app.listen(API_PORT, () => {
    console.log(`Server is listening on port ${API_PORT}.`);
});
