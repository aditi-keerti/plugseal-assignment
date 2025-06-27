const express = require('express');
const cors= require('cors');
const PORT = process.env.PORT;


const app = express();

app.listen(PORT,async() => {
    try{
        //await connection
        //console.log('Connected to db);
        console.log(`Server is running on ${PORT}`);
    }catch (err){
        console.log(err)
    }
});