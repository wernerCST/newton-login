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
    const id = { 'userID': req.params.id };
    User.findOne(id)
    .exec()
    .then(doc => {
        generateUniqueCode(res, id, doc);        
    })
    .catch(() => {
            res.status(400).json({
            status: 'fail',
            message: `Sorry no user was found with id: ${id}`
        })
    })
    
};

const generateUniqueCode = (res, id, doc) => {
    const code = { 'u_code': Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 }; 
    // send email function should go here.
    User.findOneAndUpdate(id, code, {
        new: true,
        runValidators: true
    })
    .exec()
    .then(ud => {
        console.log(ud)
        res.status(200).json(ud)
    })
    .catch(() => {
        res.status(500).json({
            status: 'fail',
            message: `Sorry no user was found with id: ${id}`
        })
    });   
    
}