const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const {port}=require('./config/config');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}`,'../dist/SimpleTask')))

const routes =require('./api/routes/index');
app.use('/data',routes);


app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});