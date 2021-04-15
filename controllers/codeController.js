const User = require('./../models/userModel')

exports.getCode = (req, res) => {
    const id = { 'userID': req.params.id };
    User.findOne(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc.u_code)   
    })
    .catch(() => {
            res.status(400).json({
            status: 'fail',
            message: `Sorry no user was found with id: ${id}`
        })
    })
    
};