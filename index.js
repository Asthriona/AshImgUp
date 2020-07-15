var express = require('express');
const mongoose = require('mongoose');
const Config = require('./config.json')

mongoose.connect(Config.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log('Connected to the database.'));
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.set('view engine', 'ejs');
const uploadRoute = require('./routes/upload');
const imgsRoute = require('./routes/imgs');
const apiRoute = require('./routes/api');
app.use('/upload', uploadRoute);
app.use('/api', apiRoute);
app.use('/img', imgsRoute)


app.get('/', (req,res)=>{
    res.render('index', {title: "Image uploader"});
})

app.listen(Config.port, () => console.log("Running! :D"))