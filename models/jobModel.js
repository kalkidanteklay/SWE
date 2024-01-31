let mongoose = require('mongoose')

let jobSchema = new mongoose.Schema({
    jobName: {
        type: String
    },
    JobType: {
        type: String
    },
    GPA: {
        type: Number,
        min: 0, 
        max: 4.0, 
        validate: {
            validator: function(value) {
                return value >= 0 && value <= 4.0;
            },
            message: 'GPA must be between 0 and 4.0'
        }
    },
    
    Date: {
        type: Date,
        min: 0, 
        max: 4.0, 
        validate: {
            validator: function(value) {
                return value >= 0 && value <= 4.0;
            },
            message: 'GPA must be between 0 and 4.0'
        }
    },
    
    employer: {type: mongoose.Schema.Types.ObjectId, ref :'Employer'}
})

module.exports = mongoose.model("Jobs", jobSchema)