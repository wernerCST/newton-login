const User = require('./../models/userModel')

exports.getCode = (req, res) => {
    let id = { 'userID': req.params.id };
    let code = req.params.code
    User.findOne(id)
    .exec()
    .then(doc => {
        if(parseInt(code) === doc.u_code) {
            res.status(200).json(doc.u_code) 
        } else {
            res.status(400).json({
                status: 'fail',
                message: `Sorry ${id}, that is not the pass code.`
            })
        }
          
    })
    .catch(() => {
            res.status(400).json({
            status: 'fail',
            message: `Sorry no user was found with id: ${id}`
        })
    })
    
};