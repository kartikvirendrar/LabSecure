const MongoClient = require('mongodb').MongoClient;
var isodate = require("isodate");
var url = process.env.DBLINK;
const client = new MongoClient(url);

exports.addAppHistory = async (req, res) => {
  try {
    const { collection, appArray, deviceArray } = req.body;
    const database = client.db("student");
    // console.log(collection);
    const history = database.collection(collection);
    const doc = {
      active: appArray,
      devices: deviceArray,
      date: new Date()
    }
    await history.insertOne(doc);
    res.json("adding app history success");
  }
  catch (err) {
    console.log(err);
    await client.close();
    res.status(400).send("Adding app history failed");
  }
};

exports.viewAppHistory = async (req, res) => {
  try {
    let { coll, fromD, toD } = req.body;
    const database = client.db("student");
    if (coll.search("App")===0 && fromD.search("2022")===0 && toD.search("2022")===0) {
    const history = database.collection(coll);
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