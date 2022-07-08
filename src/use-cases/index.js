const makeAddDev = require("./add-dev");
const database = require("../db");


//  create use-cases. 
const addDev = makeAddDev({ database });

const uses = Object.freeze({
    addDev
});

module.exports = uses;
