const Id = require("../helper/id");

const makeProfileDB = ({ makeDB }) => {
    return Object.freeze({
        insert,
        findById,
        findByParams
    });

    async function insert({ ...info }) {
        //  fill in later.
        return {...info};
    }

    async function findById({ id }) {
        //  fill in later.
        return {id};
    }

    async function findByParams({ filteredParams }) {
        //  fill in later.
        return filteredParams;
    }
};

module.exports = makeProfileDB;
