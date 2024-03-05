const setcionSelecionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('nombre-criatura-jugador')

const imagenLogoVs = new Image(60)

const setcionSelecionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('nombre-criatura-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')


let jugadorId = null
let enemigoId = null
let miscritsPon = []
let ataqueJugador = []
let ataqueEnemigo = []
let miscritsponEnenmigos = []
let opcionDeMiscrits
let inputDarment
let inputDroconos
let inputLeviant
let inputArcane
let inputDeswins
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMiscrits
let ataquesMicristEnemigo
let botonTierra
let botonFuego
let botonAgua
let botonPlanta
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let ataquesNewEnemigo = []

// utilizar el lienzo para dibujar en canvas
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = 'assets/map-battle-royale.jpg'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350
const mapMaxWidth = 768;

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


//nuestra clase
class MiscritsPon {
    constructor(nombre, foto, vida, fotoMapa , id = null){
        //variable interna que guarda un valor
        this.id = id
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMiscritspon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
//creando nuevos objeto
let darment = new MiscritsPon('Darment', 'assets/darment.png', 5, 'assets/icon-darment.png')
let droconos = new MiscritsPon('Droconos', 'assets/droconos.png', 5, 'assets/icon-droconos.png')
let leviant = new MiscritsPon('Leviant', 'assets/leviant.png', 5, 'assets/icon-leviant.png')
let arcane = new MiscritsPon('Arcane', 'assets/arcane.png', 5, 'assets/icon-arcane.png')
let deswins = new MiscritsPon('Deswins', 'assets/deswins.png', 5, 'assets/icon-deswins.png')
let gaolan = new MiscritsPon('Gaolan', 'assets/gaolan.png', 5, 'assets/icon-darment.png')
let towa = new MiscritsPon('Towa', 'assets/towa.png', 5, 'assets/icon-towa.png')

//agregando en el arreglo
//traer el nombre de la propiedad que necesitas, agregar valores a los ataques
//objetos literales no tengo clase solo van a guardan información


const DARMENT_ATAQUES = [
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🍃', id: 'boton-planta' },
]
const DROCONOS_ATAQUES = [
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🍃', id: 'boton-planta' },
]
const LEVIANT_ATAQUES = [
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🍃', id: 'boton-planta' },
]
const ARCANE_ATAQUES = [
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '💧', id: 'boton-agua' },
]
const DESWINS_ATAQUES = [
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🍃', id: 'boton-planta' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🍃', id: 'boton-planta' },
]

darment.ataques.push(...DARMENT_ATAQUES)

droconos.ataques.push(...DROCONOS_ATAQUES)

leviant.ataques.push(...LEVIANT_ATAQUES)

// leviantEnemigo.ataques.push(...LEVIANT_ATAQUES)

arcane.ataques.push(...ARCANE_ATAQUES)

// arcaneEnemigo.ataques.push(...ARCANE_ATAQUES)

deswins.ataques.push(...DESWINS_ATAQUES)

miscritsPon.push(darment, droconos, leviant, arcane, deswins)


function iniciarJuego(){
    //Ocultar las setcion
    setcionSelecionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    
    //recorer cada arreglo interar
    miscritsPon.forEach((criatura) => {
        //template literarios
        opcionDeMiscrits = `
        <input type="radio" name="criatura" id=${criatura.nombre} />
        <label class="tarjeta-de-miscrits" for=${criatura.nombre} >
            <p>${criatura.nombre}</p>
            <img src=${criatura.foto} alt=${criatura.nombre}>
        </label>
        `
        //para imprimir todos los elementos
        contenedorTarjetas.innerHTML += opcionDeMiscrits
        //Se guarda con el id
        inputDarment = document.getElementById('Darment')
        inputDroconos = document.getElementById('Droconos')
        inputLeviant = document.getElementById('Leviant')
        inputArcane = document.getElementById('Arcane')
        inputDeswins = document.getElementById('Deswins')
    })
    botonReiniciar.addEventListener('click', reiniciarJuego)
    

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
    unirseAlJuego()
}

// 192.168.1.49

function unirseAlJuego() {
    //Hacer una petición 
    fetch("http://192.168.1.49:8080/unirse")
        .then(function (res) {
            if(res.ok){
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function selecionarMascotaJugador(){
    let imagenCriaturaJugador = new Image(100)
    imagenLogoVs.src = 'assets/logo-versus.png';

    if(inputDarment.checked){
        spanMascotaJugador.innerHTML = inputDarment.id
        mascotaJugador = inputDarment.id
        imagenCriaturaJugador.src = 'assets/darment.png';
        document.querySelector('#mascota-jugador').appendChild(imagenCriaturaJugador);
        document.querySelector('#logo-vs').appendChild(imagenLogoVs);
    }else if (inputDroconos.checked){
        spanMascotaJugador.innerHTML = inputDroconos.id
        mascotaJugador = inputDroconos.id
        imagenCriaturaJugador.src = 'assets/droconos.png';
        document.querySelector('#mascota-jugador').appendChild(imagenCriaturaJugador);
        document.querySelector('#logo-vs').appendChild(imagenLogoVs);
    }else if (inputLeviant.checked){
        spanMascotaJugador.innerHTML = inputLeviant.id  
        mascotaJugador = inputLeviant.id
        imagenCriaturaJugador.src = 'assets/leviant.png';
        document.querySelector('#mascota-jugador').appendChild(imagenCriaturaJugador);
        document.querySelector('#logo-vs').appendChild(imagenLogoVs);
    }else if (inputArcane.checked){
        spanMascotaJugador.innerHTML = inputArcane.id  
        mascotaJugador = inputArcane.id
        imagenCriaturaJugador.src = 'assets/arcane.png';
        document.querySelector('#mascota-jugador').appendChild(imagenCriaturaJugador);
        document.querySelector('#logo-vs').appendChild(imagenLogoVs);
    }else if (inputDeswins.checked){
        spanMascotaJugador.innerHTML = inputDeswins.id  
        mascotaJugador = inputDeswins.id
        imagenCriaturaJugador.src = 'assets/deswins.png';
        document.querySelector('#mascota-jugador').appendChild(imagenCriaturaJugador);
        document.querySelector('#logo-vs').appendChild(imagenLogoVs);
    }else{
        setcionSelecionarAtaque.style.display = 'none'
        alert('Seleccione una mascota')
        return
        // reiniciarJuego()
    }
    //enviar hacia el backend
    sectionSeleccionarMascota.style.display = 'none'
    selecionarMiscritspon(mascotaJugador)
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function selecionarMiscritspon(mascotaJugador){
    fetch(`http://192.168.1.49:8080/miscritspon/${jugadorId}`, 
    {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            miscritspon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < miscritsPon.length; i++) {
        if (mascotaJugador === miscritsPon[i].nombre) {
            ataques = miscritsPon[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    //recorer cada arreglo interar
    ataques.forEach((ataque) => {
        //template literarios
        ataquesMiscrits = `
        <button id=${ataque.id} class="boton-de-ataque btnAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMiscrits
    })    
    botonTierra = document.getElementById('boton-tierra')
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonPlanta = document.getElementById('boton-planta')
    //Selecionan todos los elementos que se generen
    botones = document.querySelectorAll('.btnAtaque')
}

function secuenciaAtaque() {
    //5 rondas de ataques
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent == '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            }else if(e.target.textContent == '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            }else if(e.target.textContent == '🍃'){
                ataqueJugador.push('PLANTA')
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.1.49:8080/miscritspon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.1.49:8080/miscritspon/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5){
                            ataqueEnemigo = ataques
                            resultadoCombate()
                        }
                    })
            }
        })
}


function selecionarMascotaEnemigo(enemigo) {
    ataquesNewEnemigo = enemigo.ataques
    let imagenCriaturaEnemigo = new Image(100)
    setcionSelecionarMascota.style.display = 'none'
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    imagenCriaturaEnemigo.src = enemigo.foto
    document.querySelector('#mascota-enemigo').appendChild(imagenCriaturaEnemigo)
    ataquesMicristEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueEnemigoAleatorio(){
    let ataqueAletorio = aleatorio(0, ataquesMicristEnemigo.length - 1)
    //los ataques aleatorio no se repitan
    for (let i = 0; i < ataquesNewEnemigo.length; i++) {
        if (i === ataqueAletorio) {
            if(ataquesNewEnemigo[i].nombre == '🔥'){
                ataqueEnemigo.push('FUEGO')
            }else if(ataquesNewEnemigo[i].nombre == '💧'){
                ataqueEnemigo.push('AGUA')
            }else if(ataquesNewEnemigo[i].nombre == '🌱'){
                ataqueEnemigo.push('TIERRA')
            }else{
                ataqueEnemigo.push('PLANTA')
            }
            console.log(ataqueEnemigo);
            ataquesNewEnemigo.splice(ataqueAletorio, 1); // Eliminar el ataque seleccionado del array original
            break; // Salir del bucle una vez que se ha agregado el ataque aleatorio
        }
    }
    iniciarPelea()
}

function iniciarPelea() {
    //si la secuencia ya existe ya puedes insertar el ataque
    if(ataqueJugador.length == 5){
        resultadoCombate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    console.log('Jugador: ' + indexAtaqueJugador)
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    console.log('Enemigo: ' + indexAtaqueEnemigo)
}

function resultadoCombate(){
    clearInterval(intervalo)

    for (let i = 0; i < ataqueJugador.length; i++) {
        //validando si esta ganando o no
        if(ataqueJugador[i] == ataqueEnemigo[i]){
            indexAmbosOponentes(i, i)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[i] == 'FUEGO' && ataqueEnemigo[i] == 'PLANTA' ||ataqueJugador[i] == 'PLANTA' && ataqueEnemigo[i] == 'TIERRA' ||ataqueJugador[i] == 'PLANTA' && ataqueEnemigo[i] == 'AGUA' ||ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'FUEGO' || ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'FUEGO'|| ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'TIERRA'){
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else{
            indexAmbosOponentes(i, i)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    console.log(victoriasEnemigo)
        console.log(victoriasJugador)
    if(victoriasJugador == victoriasEnemigo){
        CrearMensajeFinal('Es un empate')
    }else if(victoriasJugador > victoriasEnemigo){
        CrearMensajeFinal('Felicitaciones Ganastes')
    }else{
        CrearMensajeFinal('Perdistes :(')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function CrearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    //Habilitar boton de reinicio
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    //location es la ubición en la que estamos y regresamos a la misma página
    fetch(`http://192.168.1.49:8080/reset`).then((res) => {
        if (res.ok) {
          location.reload();
        }
      });
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){
    //el objeto completo de la mascota
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    // Que pare del canvas a limpiar
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    );
    mascotaJugadorObjeto.pintarMiscritspon();
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);
    
    miscritsponEnenmigos.forEach(function (miscrits) {
        if (miscrits !== null) { 
            miscrits.pintarMiscritspon();
            revisarColisiones(miscrits);
        }
    })
    
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        detenerEnBordesDelMapa();
    }
}

function enviarPosicion(x, y) {
    fetch(`http://192.168.1.49:8080/miscritspon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if(res.ok){
            res.json()
                .then(function({enemigos}){
                    miscritsponEnenmigos = enemigos.map(function (enemigo) {
                        let miscritsEnemigo = null
                        // if(enemigo.miscrits != undefined){
                            // const miscritsNombre = enemigo.miscritspon.nombre || ""
                            const miscritsNombre = (enemigo.miscritspon && enemigo.miscritspon.nombre) || "";
                            switch (miscritsNombre){
                                case "Arcane":
                                    miscritsEnemigo = new MiscritsPon('Arcane', 'assets/arcane.png', 5, 'assets/icon-red-arcane.png', enemigo.id)
                                    break
                                case "Leviant":
                                    miscritsEnemigo = new MiscritsPon('Leviant', 'assets/leviant.png', 5, 'assets/icon-red-leviant.png', enemigo.id)
                                    break
                                case "Darment":
                                    miscritsEnemigo = new MiscritsPon('Darment', 'assets/darment.png', 5, 'assets/icon-red-darment.png', enemigo.id)
                                    break
                                case "Droconos":
                                    miscritsEnemigo = new MiscritsPon('Droconos', 'assets/droconos.png', 5, 'assets/icon-red-droconos.png', enemigo.id)
                                    break
                                case "Deswins":
                                    miscritsEnemigo = new MiscritsPon('Deswins', 'assets/deswins.png', 5, 'assets/icon-red-deswins.png', enemigo.id)
                                    break
                                case "Gaolan":
                                    miscritsEnemigo = new MiscritsPon('Gaolan', 'assets/gaolan.png', 5, 'assets/icon-red-gaolan.png', enemigo.id)
                                    break
                                case "Towa":
                                    miscritsEnemigo = new MiscritsPon('Towa', 'assets/towa.png', 5, 'assets/icon-red-towa.png', enemigo.id)
                                    break
                                default:
                                    break
                            }
                            if (miscritsEnemigo !== null) {
                                miscritsEnemigo.x = enemigo.x
                                miscritsEnemigo.y = enemigo.y
                            }
                            return miscritsEnemigo
                        // }
                    })
                })
        }
    })
}

function obtenerObjetoMascota() {
    for (let i = 0; i < miscritsPon.length; i++) {
        if (mascotaJugador === miscritsPon[i].nombre) {
            return miscritsPon[i]
        }
    }
}

function moverDerecha() {
    // actualizar la posición en x + y
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    // actualizar la posición en x + y
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo() {
    // actualizar la posición en x + y
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba() {
    // actualizar la posición en x + y
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    // Que tecla estamos presionando
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'w':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 's':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'a':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'd':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugadorObjeto)
    // Recibir el nombre de pintar y en milisegundo cada cuanto va a ejecutar
    intervalo = setInterval(pintarCanvas, 50)
    //escuchar los eventos de teclado
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function detenerEnBordesDelMapa() {
    // Verificar si las mascotas ya llegaron al borde del mapa
    const arribaMapa = 0;
    const abajoMapa = mapa.height - mascotaJugadorObjeto.alto;
    const derechaMapa = mapa.width;
    const izquierdaMapa = 0;
    const arribaJugador = mascotaJugadorObjeto.y;
    const derechaJugador = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaJugador = mascotaJugadorObjeto.x;
  
    if (arribaJugador < arribaMapa) {
        mascotaJugadorObjeto.y = arribaMapa;
    }
    if (arribaJugador > abajoMapa) {
        mascotaJugadorObjeto.y = abajoMapa;
    }
    if (derechaJugador > derechaMapa) {
        mascotaJugadorObjeto.x = derechaMapa - mascotaJugadorObjeto.ancho;
    }
    if (izquierdaJugador < izquierdaMapa) {
        mascotaJugadorObjeto.x = izquierdaMapa;
    }
}

function revisarColisiones(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    }
    // window.removeEventListener('keydown', sePresionoUnaTecla);
    // window.removeEventListener('keyup', detenerMovimiento);
    detenerMovimiento()
    clearInterval(intervalo)
    enemigoId = enemigo.id
    // console.log('Se detecto una colisión')
    setcionSelecionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    selecionarMascotaEnemigo(enemigo)
}

//Nos avisa que se cargo todo el html
window.addEventListener('load', iniciarJuego)