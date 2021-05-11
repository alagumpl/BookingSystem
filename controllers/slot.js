// import Todo Model
const moment = require("moment");
const  Slot = require("../models/slots");
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Guest:Admin@123@cluster0.lkcje.mongodb.net/myFirstDatabase";


const client = new MongoClient(uri);
// DEFINE CONTROLLER FUNCTIONS

let x = {
  slotInterval: 30,
  openTime:'23:30',
  closeTime:'06:00'
};

//Format the time
let startTime = moment(x.openTime, "HH:mm");

//Format the end time and the next day to it 
let endTime = moment(x.closeTime, "HH:mm").add(1, 'days');

//Times
let allTimes = [];

//Loop over the times - only pushes time with 30 minutes interval
while (startTime < endTime) {
  //Push times
  allTimes.push({timing:new Date(startTime.toISOString()),availablity:true,duration:30}); 
  //Add interval of 30 minutes
  startTime.add(x.slotInterval, 'minutes');
}
console.log(allTimes)
// listAll slots function - To list all slots
exports.getAll = (req, res) => {
  Slot.find({}, (err, data) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(data);
});
};
// create function - To create slots
exports.create = (req, res) => {
  run().catch(console.dir);
}

async function run() {
  try {
    await client.connect();

    const database = client.db("myFirstDatabase");
    const slotslist = database.collection("slots");

   

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await slotslist.insertMany(allTimes, options);
    // console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}








