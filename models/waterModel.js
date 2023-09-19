const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../utils/handleMongooseError');

const waterModal = new Schema(
    {
        date: {
            type: Date,
            default: Date.now(),
        },
        water: {
            type: Number,
            required: [true, 'Water is required'],
        },
        owner: {
            type: String,
            required: [true, 'Owner is required'],
        },
    },
    { versionKey: false, timestamps: true }
);

waterModal.post('save', handleMongooseError);

const Water = model('waters', waterModal);

module.exports = { Water };
