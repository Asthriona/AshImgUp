const imageUpload = require('../models/imageUpload');
const router = module.exports = require('express').Router();
const path = require('path')
router.get('/:imagefile', (req,res)=>{
    let imagefile = req.params
    let id = imagefile;
    imageUpload.findOne({
        filePath: req.params
    }, function(v){
        console.log()
        res.render('img', {image: "/upload/"+req.params.imagefile})
    });
})