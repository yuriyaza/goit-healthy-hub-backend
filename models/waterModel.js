const mongoose = require('mongoose');

const waterDBSchema = new mongoose.Schema(
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
        water: {
            type: Number,
            required: [true, 'Water quantity is required'],
        },
    },

    { versionKey: false, timestamps: true }
);

const Water = mongoose.model('waters', waterDBSchema);

module.exports = { Water };
