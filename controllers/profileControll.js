const asyncHandler = require("express-async-handler");
const User = require('../models/studentModel');

//profile page
const index = asyncHandler(
    async(req, res, next) => {
        res.send('profile page')
    }
)

// editing profile

async function updateUserById(userId,updateValues){
    try {
        const result = User.updateOne({_id:userId}, {$set: updateValues });
        if ( result === 0){
            throw new Error('User nor found or values not modfified');
        }
        return result;
    }
    catch(error){
        throw new Error('Error Updating user');
    }
}
module.exports = { updateUserById, index };
