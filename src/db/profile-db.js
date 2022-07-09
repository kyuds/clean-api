const Id = require("../helper/id");

const makeProfileDB = ({ makeDB }) => {
    const COLLECTION = "profiles";
    return Object.freeze({
        insert,
        findById,
        findByParams,
        findAll,
        update,
        remove
    });

    async function insert({ id: _id, ...info }) {
        const db = await makeDB();
        const result = await db
            .collection(COLLECTION)
            .insertOne({ _id, ...info });
        return { _id, ...info };
    }

    async function findById({ id: _id }) {
        const db = await makeDB();
        const result = await db.collection(COLLECTION).find({ _id });
        const found = await result.toArray();
        if (found.length === 0) {
            return null
        }
        const { _id: id, ...info } = found[0]
        return { id, ...info }
    }

    async function findByParams({ filteredParams }) {
        const db = await makeDB();
        const result = await db.collection(COLLECTION)
            .find(filteredParams).toArray()
        return result;
    }

    async function findAll() {
        const db = await makeDB();
        const result = await db.collection(COLLECTION)
            .find({}).toArray()
        return result;
    }

    async function update({ id: _id, ...info }) {
        const db = await makeDB();
        const result = await db
            .collection(COLLECTION)
            .updateOne({ _id }, { $set: { ...info } });
        return result.modifiedCount > 0 ? { id: _id, ...info } : null
    }

    async function remove({ id: _id }) {
        const db = await makeDB();
        const result = await db.collection(COLLECTION).deleteOne({ _id });
        return result.deletedCount;
    }
};

module.exports = makeProfileDB;
