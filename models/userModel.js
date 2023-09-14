const mongoose = require('mongoose');

const userDBSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        gender: {
            type: String,
            required: [true, 'Gender is required'],
        },
        age: {
            type: Number,
            required: [true, 'Age is required'],
        },
        height: {
            type: Number,
            required: [true, 'Height is required'],
        },
        weight: {
            type: Number,
            required: [true, 'Weight is required'],
        },
        activity: {
            type: Number,
            required: [true, 'Activity is required'],
        },
        goal: {
            type: String,
            required: [true, 'Goal is required'],
        },
        avatar: {
            type: String,
        },
        token: {
            type: String,
        },
    },

    { versionKey: false, timestamps: true }
);

const Users = mongoose.model('users', userDBSchema);

module.exports = { Users };
