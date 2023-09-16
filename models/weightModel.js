const mongoose = require('mongoose');

const weightDBSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: [true, 'Date is required'],
            default: Date.now(),
        },
        owner: {
            type: String,
            required: [true, 'Owner is required'],
        },
        weight: {
            type: Number,
            required: [true, 'Weight is required'],
        },
    },

    { versionKey: false, timestamps: true }
);

const Weight = mongoose.model('weights', weightDBSchema);

module.exports = { Weight };
