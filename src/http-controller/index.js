const { addDev, findDev, editDev, removeDev } = require("../use-cases");

//  controller builders
const invalid = require("./invalid");
const makePostDev = require("./post");
const makeGetDev = require("./get");
const makePatchDev = require("./patch");
const makeDeleteDev = require("./delete");

// controllers
const postDev = makePostDev({ addDev });
const getDev = makeGetDev({ findDev });
const patchDev = makePatchDev({ editDev });
const deleteDev = makeDeleteDev({ removeDev });

const controllers = Object.freeze({
    getDev,
    postDev,
    patchDev,
    deleteDev,
    invalid
});

module.exports = controllers;
