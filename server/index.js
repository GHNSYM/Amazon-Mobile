const express=require('express');
const PORT=3000;

const app=express();

app.get('/',(req,res)=>{
    res.json("Hello world")
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log('lsfja');
});