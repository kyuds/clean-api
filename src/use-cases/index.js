const makeAddDev = require("./add-dev");
const makeFindDev = require("./find-dev");
const makeEditDev = require("./edit-dev");
const makeRemoveDev = require("./remove-dev");
const { database } = require("../db");


//  create use-cases. 
const addDev = makeAddDev({ database });
const findDev = makeFindDev({ database });
const editDev = makeEditDev({ database });
const removeDev = makeRemoveDev({ database });

const uses = Object.freeze({
    addDev,
    findDev,
    editDev,
    removeDev
});

module.exports = uses;
