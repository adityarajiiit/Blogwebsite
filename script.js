import express from "express";


import bodyParser from "body-parser";
const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req,res) =>{
//    res.render("D:\\Web development\\Blog website\\index.ejs");
// });
app.get("/",(req,res)=> {
res.render("index.ejs")
});
app.get("/create",(req,res)=> {
    res.render("create.ejs");
});
app.get("/view",(req,res)=> {
    res.render("view.ejs",{
        name:req.body.name,
        birth:req.body.birth,
        email:req.body.email,
        phone:req.body.phone,
        blog:req.body.blog
    });
});

app.post("/view",(req,res)=> {
   console.log(req.body);
    res.render("D:\\Web development\\Blog website\\view.ejs",{
        name:req.body.name,
        birth:req.body.birth,
        email:req.body.email,
        phone:req.body.phone,
        blog:req.body.blog

    });
});
// app.delete("/view/",(req,res)=> {
//     console.log(req.body);
//     res.send("done");
// })
// app.put('/view/:id', (req, res) => {
//     const updatedUserData = req.body;
//     const userId = req.params.id;
//     console.log(req.body);
//     console.log(userId);
// });
app.post("/view",(req,res)=> {
    console.log(req.body);
    res.render("view.ejs",{
        name:req.body.name,
        birth:req.body.birth,
        email:req.body.email,
        phone:req.body.phone,
        blog:req.body.blog
    });
});
app.listen(port,()=>{
    console.log(`The port name is ${port}`);
});
