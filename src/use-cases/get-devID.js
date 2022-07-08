const makeGetDevID = ({ database }) => {
    return async ({ id }) => {
        return id;
    };
};

module.exports = makeGetDevID;
