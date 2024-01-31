const user = require('../models/jobModel');
const Job = require('../models/studentModel');
async function searchJob(department){
    try {
        const allJobs = await Job.find();
        const matchingJobs = allJobs.filter(job => job.department === department);
        return matchingJobs;
    }
    catch(error){
        throw new Error('Error searching job');
    }
}

async function searchUser(name){
    try {
        const allUsers = await user.find();
        const matchingPeople = allUsers.filter(stu => stu.name === name);
        return matchingPeople;
    }
    catch(error){
        throw new Error('Error searching user');
    }
}
module.exports = {searchJob, searchUser };