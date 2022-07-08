const { addDev } = require("../use-cases");

//  controller builders
const invalid = require("./invalid");
const makePostDev = require("./post");

// controllers
const postDev = makePostDev({ addDev });

const controllers = Object.freeze({
    postDev,
    invalid
});

module.exports = controllers;
