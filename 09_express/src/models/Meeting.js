const mongoose = require( 'mongoose' );

const meetingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    startTime: {
        hours: {
            type: Number,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            min: 0,
            max: 59
        }
    },
    endTime: {
        hours: {
            type: Number,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            min: 0,
            max: 59
        }
    },
    attendees: {
        type: [ String ],
        default: []
    }
});

const Meeting = mongoose.model( 'Meeting', meetingsSchema );

console.log( Meeting );







