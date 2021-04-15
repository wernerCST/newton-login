const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        require: [true, 'A user should have a userID'],
        unique: true
    },
    email: {
        type: String,
        require: [true, 'A user should have an email'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'A user should have an email'],
        unique: true
    },
    // u_code: {
    //     code: [{ type: mongoose.Schema.Types.ObjectId, ref: 'code'}]
    // }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

