const express = require("express");
const path =require("path")

const app = express();

app.set("port", 8080)
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"))

app.listen(app.get("port"), (res,req) => {
    
    console.log("server listening in", app.get("port"))
    
})