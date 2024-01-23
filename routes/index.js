const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {

    
console.log(messages)

    res.render("index.ejs", { messages: messages })

})

router.get("/new", (req, res) => {
    res.render("new")
})

router.post("/new", (req, res) => {
       
    messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    res.redirect("/")
})

module.exports = router