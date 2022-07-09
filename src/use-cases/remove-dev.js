const makeProfile = require("../profile");

const makeRemoveDev = ({ database }) => {
    return async ({ id }) => {
        if (!id) {
            throw new Error("Must query an ID for delete.");
        }

        const cnt = await database.remove({ id });
        return { 
            success: cnt ? true : false,
            message: cnt ? "Successfully deleted." : "Failed."
        };
    };
};

module.exports = makeRemoveDev;
