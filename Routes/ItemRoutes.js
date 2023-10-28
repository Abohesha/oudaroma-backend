const express = require('express')
const Item = require('../Models/Item.js')


const router = express.Router();

router.get('/get-all-items', async (req,res)=>{
    const items = await Item.find()
    res.status(200).json(items)
})

router.get('/get-item-by-id/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const item = await Item.findById(id);
        res.status(200).json(item)
    }catch(err){
        res.status(404).json("not found")
    }
})

router.get('/get-item-by-category', async(req,res)=>{
    const item = await Item.find({category:req.body.category});  
    if(!item){
        res.status(404).json("item with this category not found")
    }
    res.status(200).json(item);

})

router.put('/update-item', async(req,res)=>{
    try{
        const item = await Item.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json(item)
    }catch(err){
        if(err) 
        res.status(400).json(err)
    }
})



router.post('/add-item', async(req,res)=>{
    const name = await req.body.name;
    const image = await req.body.image;
    const category = await req.body.category;
    const price = await req.body.price;
    const shortDescription = await req.body.shortDescription;
    const longDescription = await req.body.longDescription;


    try{
        const newItem = new Item({
            name:name,
            image:image,
            price:price,
            category:category,
            shortDescription:shortDescription,
            longDescription:longDescription
        })
        await newItem.save();
        res.status(200).json("item created successfully and saved in monogdb")

    }catch(err){
        if(err) res.status(400).json(err)
    }
})


router.delete("/delete-item", async (req, res) => {
    const id = req.body.id;
    const item = await Item.findById(id);

        try {
          await item.delete();
          res.status(200).json("Item has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      
   
  });

module.exports = router;