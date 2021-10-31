const mongoose      = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 30
    },
    email: {
        type: String,
        required: true,
        min: 10,
        max: 100
    },
    password: {
        type: String,
        required:true,
        min: 8,
    },
})

module.exports = mongoose.model('User', userSchema);