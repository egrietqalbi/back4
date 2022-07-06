const { MongoClient } = require('mongodb');

const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


// Connection URL
const url = 'mongodb+srv://icha:icha1234@cluster0.eff2b.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'meltback';
app.get('/',async (req, res) => {
    await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('melt');
  const findresult = await collection.find({}).toArray();
 res.status(200).json({data : findresult})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})