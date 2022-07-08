const makeProfile = require("../profile");

const makeRemoveDev = ({ database }) => {
    return async ({ id }) => {
        if (!id) {
            throw new Error("Must query an ID for delete.");
        }

        const profile = await database.findById({ id });
        if (!profile) {
            return {
                success: false,
                message: "Dev profile not found."
            };
        }

        await database.remove({ profile });
        return { 
            success: true,
            message: "Successfully deleted." 
        };
    };
};

module.exports = makeRemoveDev;
