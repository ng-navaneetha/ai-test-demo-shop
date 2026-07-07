const express=require("express");
const path=require("path");

const app=express();

app.use(express.static(
    path.join(__dirname,"pages")
));

app.use(
    "/js",
    express.static(
        path.join(__dirname,"js")
    )
);


app.get("/",(req,res)=>{

 res.sendFile(
 path.join(__dirname,"pages/login.html")
 );

});


app.listen(4000,()=>{

 console.log(
 "Demo Shop running on port 4000"
 );

});