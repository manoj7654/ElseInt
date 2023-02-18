const app=require("express")()

app.get("/",(req,res)=>{
    res.send("hii")
})


app.listen(4500,()=>{
   console.log("server is running now")
})