// import Todo Model
const  Appointment = require("../models/appointments");
const  Slot = require("../models/slots");
const moment = require("moment");

// DEFINE CONTROLLER FUNCTIONS

// listAll appointments function - To list all apointments
exports.getAll = (req, res) => {
  Appointment.find({}, (err, data) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(data);
});
};

// create function - To create appointments
exports.create = (req, res) => {
  
var request = req.query;

if(request.timing == null || request.timing == '' || request.timing == undefined){
  return res.status(400).send("parameter missing or please give proper value")
}
// moment(request.timing).toISOString()
// console.log(request.timing)

Slot.find({timing:'2021-05-11T19:00:00+05:30',availablity:true},(err,data) => {
console.log(data)
})
// let  newAppointment = new Appointment (req.body.query);
// newAppointment.save((err, data) => {
// if (err) {
// res.status(500).send(err);
// }
// res.status(201).json(data);
// });
};
