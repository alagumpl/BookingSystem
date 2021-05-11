'use strict';

// create App function
    module.exports = function(app) {
        const appointmentController = require('../../controllers/appointments')
        const slotController = require('../../controllers/slot')
// appointmentController and  slotController Routes

// get and post request for /appointments endpoints
        app
        .route("/appointments")
        .get(appointmentController.getAll)
        .post(appointmentController.create);

// get for /retrieveSlots endpoints
        app
        .route("/retrieveSlots")
        .get(slotController.getAll)
        .post(slotController.create)
    };
