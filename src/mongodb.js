const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/webspirites")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})