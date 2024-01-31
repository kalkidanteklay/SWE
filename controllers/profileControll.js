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


async function deleteUserById(userId){
    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            throw new Error('User not found');
        }

        // console.log(`User with ID ${userId} has been deleted successfully.`);
        return deletedUser;
    }
    catch(error){
        throw new Error('Error deleting user');
    }
}
module.exports = { updateUserById, index, deleteUserById };
