const makeAddDev = require("./add-dev");
const makeFindDev = require("./find-dev");
const { database } = require("../db");


//  create use-cases. 
const addDev = makeAddDev({ database });
const findDev = makeFindDev({ database });

const uses = Object.freeze({
    addDev,
    findDev
});

module.exports = uses;
