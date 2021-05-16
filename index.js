const express = require('express');
const app = express();
const path=require('path');
const { debugPort } = require('process');

const PORT= process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'resume_template')));

app.listen(PORT,()=>{console.log("server is listening at Port: "+PORT)});