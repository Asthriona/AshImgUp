const imageUpload = require('../models/imageUpload');
const router = module.exports = require('express').Router();
const path = require('path')
router.get('/:imagefile', (req,res)=>{
    let {imagefile} = req.params
    let id = imagefile.split(".").shift();
    imageUpload.findById(id)
    .then(v =>{
        if(!imageUpload.pathName) return res.status(404).send("woops! didnt found that one! D:")
        res.render('img', {image: v.filePath})
    }).catch(err => console.log(err))
})