const router        = require('express').Router();
const User          = require('../models/User');

const emailExists = async (email) => {
    let emails = await User.findOne({ email: email });

    if (emails) {
        return true
    } else {
        return false
    }
};

module.exports = emailExists;