const makeAddDev = require("./add-dev");
const makeGetDevID = require("./get-devID");
const makeGetDevParam = require("./get-devParam");
const { database } = require("../db");


//  create use-cases. 
const addDev = makeAddDev({ database });
const getDevID = makeGetDevID({ database });
const getDevParam = makeGetDevParam({ database });

const uses = Object.freeze({
    addDev,
    getDevID,
    getDevParam
});

module.exports = uses;
