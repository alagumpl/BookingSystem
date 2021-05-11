var mongoose = require('mongoose');

var SlotSchema = new mongoose.Schema({
    timing:Date,
    duration:Number,
    availablity:Boolean,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

SlotSchema.index({date : 1}, {unique: true});

module.exports = mongoose.model('Slot', SlotSchema);
