const express = require('express');
const bodyParser = require('body-parser');
const searchController = require('../controllers/search');
const path = require('path');
const router = express.Router();


router.post('/search',async(req,res)=>{
    const department = req.body.department;
    try {
        const result = await searchController.searchJob(department);
        res.json(result);
    } catch(error){
        res.status(500).json({ msg: 'Internal Server Error' });
    }

})
module.exports = router;