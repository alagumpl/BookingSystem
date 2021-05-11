var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
	slot_id: {type: mongoose.Schema.ObjectId, ref: 'SlotSchema'},
	Name:String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
