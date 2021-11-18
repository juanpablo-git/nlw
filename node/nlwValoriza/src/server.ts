import express from 'express'
const app = express()

app.get("/",(req,res)=>{
   return res.send("zgdzvzv")
})
app.post("/post",(req,res)=>{
    return res.send("ola juan post")
})

app.listen(3000,()=>console.log("Server runing"))
