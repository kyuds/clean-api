const { addDev, findDev } = require("../use-cases");

//  controller builders
const invalid = require("./invalid");
const makePostDev = require("./post");
const makeGetDev = require("./get");

// controllers
const postDev = makePostDev({ addDev });
const getDev = makeGetDev({ findDev });

const controllers = Object.freeze({
    getDev,
    postDev,
    invalid
});

module.exports = controllers;
