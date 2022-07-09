const makeProfileDB = require("./profile-db");
const { MongoClient } = require("mongodb");

//  constants
const DB_NAME = "devprofiles";
const URL = `mongodb://localhost:27017/${DB_NAME}`;

const client = new MongoClient(URL, { useNewUrlParser: true });

const makeDB = async () => {
	await client.connect();
	return client.db();
}

const database = makeProfileDB({ makeDB })
module.exports = Object.freeze({ makeDB, database });
