import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Array to store posts
const posts = [];

//Post class to create a Post Object
class Post {
    constructor(postTitle, postContent) {
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.postDate = new Date();
    }
}

//Load Page
app.get("/", (req, res)=>{
    res.render("index.ejs", {posts});
})

//Creating a Post Object and storing it in array posts[]
app.post("/createPost", (req, res) => {

    var post = new Post(req.body.postTitle, req.body.postContent);

    posts.push(post);

    // console.log(posts);
    res.redirect("/");
});

//Deleting a post using splice. The delete button has a hiddenvalue that is the post index inside the array
app.post("/delete", (req, res)=>{

    posts.splice(req.body.postIndex, 1);

    res.redirect("/");
})

//Rewriting the Post Object on array position
app.post("/edit", (req ,res) =>{

    console.log(req.body);

    posts[req.body.postIndex] = new Post(req.body.postTitle, req.body.postContent);

    console.log(posts);

    res.redirect("/");
})


//Set Server
app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
})
