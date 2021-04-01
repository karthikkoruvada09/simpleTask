const mongodb = require('mongodb');
const app={};
const dbConnection = require('../db/index');
let db;

async function connect(){
 db = await dbConnection();
}
connect();


app.get = async(req,res)=>{
    const data  = await db.collection('form_data').find().toArray();
    res.send(data);
}

app.post = async(req,res)=>{
	const body = req.body;
    await db.collection('form_data').insertOne(body);
    res.end();
}

module.exports = app;
