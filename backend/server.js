const express       = require('express');
const mongoose      = require('mongoose');
const cors          = require('cors');
const secrets       = require('./secrets');

const PORT = 3002;
const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTES //
const authRoutes = require('./routes/Auth');
app.use('/auth', authRoutes);


mongoose.connect(secrets, () => {
    console.log('Connected to DB.')
})


app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});