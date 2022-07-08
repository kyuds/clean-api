const Id = require("../helper/id");

const makeProfileDB = ({ makeDB }) => {
    return Object.freeze({
        insert
    });

    async function insert({ ...info }) {
        //  fill in later.
        return {...info};
    }
};

module.exports = makeProfileDB;
