const { MongoClient } = require("mongodb");
const uri = require('../../config/config').url;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('task');
    return database;
  } finally {

  }
}

module.exports = run;