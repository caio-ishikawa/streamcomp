const User      = require('../models/User');

const usernameExists = async (username) => {
    let user = await User.findOne({ username: username });

    if (user) {
        return true 
    } else {
        return false 
    }
    
};

module.exports = usernameExists;