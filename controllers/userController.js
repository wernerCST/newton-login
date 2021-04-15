const User = require('./../models/userModel')
const nodemailer = require("nodemailer");

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find()
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
    let id = { 'userID': req.params.id };
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
    let code = { 'u_code': Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 }; 
    User.findOneAndUpdate(id, code, {
        new: true,
        runValidators: true
    })
    .exec()
    .then(ud => {
        sendCodeToEmail(ud.email, ud.u_code);
        res.status(200).json(ud)
    })
    .catch(() => {
        res.status(500).json({
            status: 'fail',
            message: `Sorry something went wrong on our server side`
        })
    });      
}

const sendCodeToEmail = (email, code) => {
//    let transport = nodemailer.createTransport({
//        host: 'email-smtp.us-east-1.amazonaws.com',
//        port: 700,
//        secure: true, // true for 465, false for other ports...
//        auth: {
//            user: '',
//            pass: ''
//        }
//    });

    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'THE EMAIL YOU WISH TO SEND THE MSG FROM GOES HERE',
            pass: ''
        }
    });

   let mailOptions = {
       from: `"Werner :) <josepepin2@gmail.com>"`,
       to: email,
       subject: 'secrete code..',
       text: `Your secrete code is: ${code}`
   }
   transport.sendMail(mailOptions, (err, info) => {
       if(err) {
           console.log(err);
       } else {
           console.log(`email sent!!! ${info.response}`);
       }
   })
};