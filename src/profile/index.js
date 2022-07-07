const Id = require("../helper/id");
const buildMakeProfile = require("./profile");

//  fix later.
const validEmail = email => {
    if (!email) {
        return false;
    }
    return true;
}

const makeProfile = buildMakeProfile({ Id, validEmail });

module.exports = makeProfile;
