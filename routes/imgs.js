const imageUpload = require('../models/imageUpload');
const router = module.exports = require('express').Router();
const path = require('path')
router.get('/:imagefile', (req,res)=>{
    let {imagefile} = req.params
    let id = imagefile.split(".").shift();
    imageUpload.findById(id)
    .then(v =>{
        res.render('img', {image: v.filePath})
    }).catch(err => console.log(err).then(res.status(404).send("oof! an error happened :/")))
})