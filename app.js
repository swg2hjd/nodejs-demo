var express = require('express');
var port = 3000;
var app = express();
app.get('/',(req,res)=>{
    res.send('hello nodejs');
});



app.listen(port,()=>{
    console.log(`Server is running at ${port}....`);
})
