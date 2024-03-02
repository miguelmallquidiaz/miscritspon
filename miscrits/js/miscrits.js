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

//guardar diferentes valores
let miscritsPon = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMiscrits
let inputDarment
let inputDroconos
let inputLeviant
let mascotaJugador
let ataquesMiscrits
let ataquesMicristEnemigo
let botonTierra
let botonFuego
let botonAgua
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0

//nuestra clase
class MiscritsPon {
    constructor(nombre, foto, vida){
        //variable interna que guarda un valor
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}
//creando nuevos objeto
let darment = new MiscritsPon('Darment', 'assets/darment.png', 10)
let droconos = new MiscritsPon('Droconos', 'assets/droconos.png', 9)
let leviant = new MiscritsPon('Leviant', 'assets/leviant.png', 6)
let arcane = new MiscritsPon('Arcane', 'assets/arcane.png', 10)
let deswins = new MiscritsPon('Deswins', 'assets/deswins.png', 8)
let gaolan = new MiscritsPon('Gaolan', 'assets/gaolan.png', 9)
let towa = new MiscritsPon('Towa', 'assets/towa.png', 6)
//agregando en el arreglo
//traer el nombre de la propiedad que necesitas, agregar valores a los ataques
//objetos literales no tengo clase solo van a guardan información
darment.ataques.push(
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🔥', id: 'boton-fuego' },
)

droconos.ataques.push(
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '🔥', id: 'boton-fuego' },
    { nombre : '💧', id: 'boton-agua' },
)

leviant.ataques.push(
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '🌱', id: 'boton-tierra' },
    { nombre : '💧', id: 'boton-agua' },
    { nombre : '💧', id: 'boton-agua' },
)

miscritsPon.push(darment, droconos, leviant)


function iniciarJuego(){
    setcionSelecionarAtaque.style.display = 'none'
    // sectionReiniciar.style.display = 'none'
    
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
    })

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionarMascotaJugador(){
    let imagenCriaturaJugador = new Image(150)
    sectionSeleccionarMascota.style.display = 'none'
    setcionSelecionarAtaque.style.display = 'flex'
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
    }else{
        setcionSelecionarAtaque.style.display = 'none'
        alert('Seleccione una mascota')
        reiniciarJuego()
    }
    extraerAtaques(mascotaJugador)
    selecionarMascotaEnemigo()
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
    //Selecionan todos los elementos que se generen
    botones = document.querySelectorAll('.btnAtaque')
    console.log(botones)
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
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#122f58'
                boton.disabled = true
            }
            ataqueEnemigoAleatorio()
        })
    })
}

function selecionarMascotaEnemigo() {
    let imagenCriaturaEnemigo = new Image(150)
    let mascotaAletorio = aleatorio(0, miscritsPon.length - 1)
    setcionSelecionarMascota.style.display = 'none'

    spanMascotaEnemigo.innerHTML = miscritsPon[mascotaAletorio].nombre
    imagenCriaturaEnemigo.src = miscritsPon[mascotaAletorio].foto
    document.querySelector('#mascota-enemigo').appendChild(imagenCriaturaEnemigo)

    ataquesMicristEnemigo = miscritsPon[mascotaAletorio].ataques
    secuenciaAtaque()
}

function ataqueEnemigoAleatorio(){
    //Aqui los ataques no importa si se aumenta más ataques
    let ataqueAletorio = aleatorio(0, ataquesMicristEnemigo.length - 1)
    //selecionar una de los arreglos que tiene el enemigo
    if(ataqueAletorio == 0 || ataqueAletorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAletorio == 3 || ataqueAletorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
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
    for (let i = 0; i < ataqueJugador.length; i++) {
        // console.log(ataqueJugador[i])
        //validando si esta ganando o no
        if(ataqueJugador[i] == ataqueEnemigo[i]){
            indexAmbosOponentes(i, i)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasEnemigo.innerHTML = victoriasJugador
        }else if(ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'FUEGO' || ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'FUEGO'|| ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'TIERRA'){
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasEnemigo.innerHTML = victoriasJugador
        }else{
            indexAmbosOponentes(i, i)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasJugador.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
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
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Nos avisa que se cargo todo el html
window.addEventListener('load', iniciarJuego)
