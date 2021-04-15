const User = require('./../models/userModel')


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
    
};

exports.getUser = (req, res) => {
    const id = req.params.id;
    User.findOne({ 'userID': id })
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        })
    })
    
};