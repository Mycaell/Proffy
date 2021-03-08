const express = require('express')
const server = express()

server.use(express.static("public"))
.get("/", function(req, res){
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", function(req, res){
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", function(req, res){
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)