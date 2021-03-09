const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// configurando o nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


// configurando o servidor
server

//receber os dados do req.body
.use(express.urlencoded({extended: true}))

// configurando arquivos estáticos
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//porta utilizada
.listen(5500)