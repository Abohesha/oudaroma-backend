const express = require('express')
const UtilsModel = require('../Models/Utils.js');



const router = express.Router();

router.get('/get-about-us', async(req,res)=>{
    const util =  await UtilsModel.find({})
    res.status(200).json(util)

})

router.put('/update-about-us-by-id', async(req,res)=>{
    const id = req.body.id;
    const new_text = req.body.new_text;

    try{
        UtilsModel.findByIdAndUpdate(
            id,
            {$set:{
                about:new_text
            }},
            {new:true}
        )
    }catch(err){
        res.status(400).json('request failed')
    }

})

module.exports = router