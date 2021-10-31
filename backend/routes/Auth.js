const router        = require('express').Router();
const User          = require('../models/User');
const nameExists    = require('../util/usernameExists');
const emailExists   = require('../util/emailExists');
const jwt           = require('jsonwebtoken');
const bcrypt        = require('bcryptjs');


router.post('/register', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log({email, username, password})

    // Checks if username and email already exists //
    const userExist = await nameExists(username)
    const emailExist = await emailExists(email);
    if (userExist || emailExist) {
        res.send("Username or email already exists.");
    } 

    // Hashes password before inserting into DB //
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(password, salt);

    // Creates new user instance //
    let newUser = new User({
        username: username,
        email: email,
        password: hash 
    });

    // Saves user //
    try {
        let savedUser = await newUser.save();
        res.send(savedUser);
    } catch (err) {
        res.send(err);
    }
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username: username });
    if (!user) {
        res.send("User does not exist.")
    }

    // Compares hashed passwords //
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        res.send("Invalid password.");
    }

    // Creates JWT //
    const token = jwt.sign({_id: user._id}, 'testKey');
    res.cookie('jwtCookie', token, {
        httpOnly: true
    });

    res.send(user)
});

module.exports = router;