const proffys = [
    {
        name: "Mycaell de Oliveira",
        avatar: "https://avatars.githubusercontent.com/u/44411808?s=60&v=4",
        whatsapp: "(81) 99951-9163",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratório.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Mycaell de Oliveira",
        avatar: "https://avatars.githubusercontent.com/u/44411808?s=60&v=4",
        whatsapp: "(81) 99951-9163",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratório.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
]


function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html", {proffys})

}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// configurando o nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})


// configurando o servidor
server

// configurando arquivos estáticos
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//porta aberta
.listen(5500)