const mongoose = require('mongoose');

const usersDBSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        subscription: {
            type: String,
            enum: ['starter', 'pro', 'business'],
            default: 'starter',
        },
        avatarURL: {
            type: String,
        },
        verifiedStatus: {
            type: Boolean,
            default: false,
        },
        verificationCode: {
            type: String,
            required: [true, 'Verification code is required'],
        },
        token: {
            type: String,
        },
    },

    { versionKey: false, timestamps: true }
);

const Users = mongoose.model('users', usersDBSchema);

module.exports = { Users };
