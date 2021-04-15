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
    u_code: {
        type: Number,
        unique: false
    },
    u_code_date: {
        type: Date,
        unique: false
    }
});




const User = mongoose.model('User', userSchema);

module.exports = User;

