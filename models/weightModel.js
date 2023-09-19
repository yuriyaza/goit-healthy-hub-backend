const mongoose = require('mongoose');

const weightDBSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now(),
        },
        weight: {
            type: Number,
            required: [true, 'Weight is required'],
        },
        owner: {
            type: String,
            required: [true, 'Owner is required'],
        },
    },

    { versionKey: false, timestamps: true }
);

const Weight = mongoose.model('weights', weightDBSchema);

module.exports = { Weight };
