import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.post("/create", (req, res)=>{

    posts.push(req.body);

    console.log(posts);
    res.render("index.ejs", {posts});
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
})

const posts = [];