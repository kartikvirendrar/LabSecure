const MongoClient = require('mongodb').MongoClient;
var isodate = require("isodate");
var url = process.env.DBLINK;
const client = new MongoClient(url);

exports.addHistory = async (req, res) => {
  try {
    const { collection, url, title } = req.body;
    const database = client.db("student");
    const history = database.collection(collection);
    const doc = {
      url: url,
      title: title,
      date: new Date()
    }
    await history.insertOne(doc);
    res.json("adding history success");
  }
  catch (err) {
    console.log(err);
    await client.close();
    res.status(400).send("Adding history failed");
  }
};

exports.viewHistory = async (req, res) => {
  try {
    let { collection, fromD, toD } = req.body;
    const database = client.db("student");
    if (collection.search("Lab")===0 && fromD.search("2022")===0 && toD.search("2022")===0) {
    const history = database.collection(collection);
    if (fromD===toD) {
      toD = new Date();
    }
    let a = await history.find({
      date:{
        $gte: isodate(fromD),
        $lt: isodate(toD)
      }
    }).toArray();
    res.json(a);
  }
  }
  catch (err) {
    console.log(err);
    await client.close();
    res.status(400).send("Viewing history failed");
  }
};  