const user = require('../models/jobModel');
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
module.exports = {searchJob };