const makeProfile = require("../profile");

const makeAddDev = ({ database }) => {
    return async (devInfo) => {
        const profile = makeProfile(devInfo);

        return database.insert({
            id: profile.id,
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            joinedOn: profile.joinedOn,
            modifiedOn: profile.modifiedOn,
            company: profile.company,
            language: profile.language
        });
    };
};

module.exports = makeAddDev;
