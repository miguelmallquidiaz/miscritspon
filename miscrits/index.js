//Utilizar las liberias que se instalo con npm
//importamos express.js para utilizarlo en nuestro proyecto
const express = require("express")
const cors = require("cors")

//Se genera una instancia
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors())
//Crear una lista de jugadores
let jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }

    asignarMiscritspon(miscritspon){
        this.miscritspon = miscritspon
    }
    
    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Miscritspon {
    constructor(nombre){
        this.nombre = nombre
    }
}

// Le decimos a express.js que cuando en la Url raiz reciba una peticion responda '¡Hola Express!'
//cada vez que el cliente solicita un recurso se va a realizar algo
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    //cuidado cualquier origen es valido
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})

app.get("/reset", (req, res) => {
    const arLimpio = jugadores.filter((item) => {
      return !item.mokepon;
    });
    jugadores = arLimpio;
    res.end();
});

app.post("/miscritspon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.miscritspon || ""
    const miscritspon = new Miscritspon(nombre)
    //buscar entre toda la lista si existe nos devuelve la lista si no existe nos da -1
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMiscritspon(miscritspon)
    }
    console.log("Lista de jugadores: ", jugadores)
    console.log("Id del jugador actual: ", jugadorId)
    res.end()
})


app.post("/miscritspon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }
})

app.get("/miscritspon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
      ataques: jugador.ataques || []
    })
})

app.post("/miscritspon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })
})
//Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que pueda responderlas
app.listen(8080, () => {
    console.log('El servidor funcionando')
})