const makeProfile = require("../profile");

const makeEditDev = ({ database }) => {
    return async ({ id, ...changes }) => {
        if (!id) {
            throw new Error("Must query an ID for patch.");
        }

        const profile = await database.findById({ id });
        if (!profile) {
            throw new Error("Must query valid, existing ID.");
        }

        //const newProfile = makeProfile({ ...profile, ...changes, modifiedOn: null });
        const newProfile = {
            id: id,
            ...changes
        }
        const updated = await database.update({ ...newProfile });
        return updated;
    };
};

module.exports = makeEditDev;
