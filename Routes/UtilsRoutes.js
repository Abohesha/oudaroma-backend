const express = require('express')
const UtilsModel = require('../Models/Utils.js');



const router = express.Router();
const utilsId = "658b4b584805b47e1774c199";
    

router.post('/add-utils', async(req,res)=>{

    const about = await req.body.about;
    const announcement = await req.body.announcement;
    const giftcards = await req.body.giftcards;

    const newUtil = await UtilsModel({
        about:about,
        announcement:announcement,
        giftcards,giftcards
    })

    try{
        await newUtil.save()
        res.status(200).json("util added successfully")    
    }
    catch(err){
        res.status(400).json("util add failed")    
    }
})

router.get('/get-utils', async(req,res)=>{

    try{
        const util = await UtilsModel.findById(utilsId)
        
        res.status(200).json(util)
    }catch(err){
        res.status(400).json("no util with this id")
    }
})

router.post('/update-utils', async(req,res)=>{
    const {about, announcement, giftcards} = req.body;

    const updateFields = {}; // Initialize an empty object to store the fields to update

    if (req.body.about) {
      updateFields.about = req.body.about;
    }
  
    if (req.body.announcement) {
      updateFields.announcement = req.body.announcement;
    }
  
    if (req.body.giftcards) {
      updateFields.giftcards = req.body.giftcards;
    }
  
    try {
      const updatedUtil = await UtilsModel.findByIdAndUpdate(
        utilsId,
        { $set: updateFields },
        { new: true }
      );
  
      if (!updatedUtil) {
        return res.status(404).json("Util not found");
      }
  
      res.status(200).json(updatedUtil);
    } catch (err) {
      console.error(err);
      res.status(400).json("Update failed");
    }

})

module.exports = router