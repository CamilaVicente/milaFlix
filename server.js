const app = require("./src/app")

const PORT = 4567

app.listen(PORT, ()=>{
    console.log(`Estamos na porta ${PORT}`)
})