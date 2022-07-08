const makeProfileDB = require("./profile-db");
const mongodb = require("mongodb");

//  constants
const URL = "mongodb://localhost:27017";
const DB_NAME = "dev_profiles";

const client = new mongodb.MongoClient(URL, { useNewUrlParser: true })

const makeDB = async () => {
    if (!client.isConnected()) {
      await client.connect()
    }
    return client.db(DB_NAME);
}

const database = makeProfileDB({ makeDB })

module.exports = Object.freeze({ makeDB, database });
