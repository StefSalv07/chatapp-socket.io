const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 9000;
app.listen(PORT,(err,sucess)=>{
    if(err)
    {
        console.log('Error Connecting to the server');
        
    }
    else
    {
        console.log('Server Started on Port 9000...!');
    }
});

app.use(express.static(path.join(__dirname,'frontend')));
