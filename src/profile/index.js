//  Injected dependencies.
const Id = require("../helper/id");
const validEmail = require("../helper/valid-email");

//  Model
const buildMakeProfile = require("./profile");
const makeProfile = buildMakeProfile({ Id, validEmail });

module.exports = makeProfile;
