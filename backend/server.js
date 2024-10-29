import express from "express";

const app=express();

app.get("/",(req,res)=>{

  res.send("hello123");
});

app.listen(5000,()=>{
  console.log(" server http:localhost:5000");
})