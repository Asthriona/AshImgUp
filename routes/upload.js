const router = module.exports = require('express').Router();
const multer = require('multer');
const imageUpload = require('../models/imageUpload');
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './public/upload/')
    },
    filename: (req,file,cb)=>{
        let img = new imageUpload({});
        img.filePath = "/upload/" + img._id+"."+file.originalname.split('.').pop();
        img.save().then(()=>{
            console.log("saved!");
            cb(null, img._id+"."+file.originalname.split('.').pop());
        })
        .catch(err => console.log(err));
        
    }
})
const upload = multer({storage: storage})
router.post('/', upload.single('photo'), (req,res)=>{
    console.log('post request :)')
    console.log(req.file);
    res.status(201).json({
        fileName: req.file.filename
    }).end();
})