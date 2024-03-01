let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let setcionSelecionarAtaque = document.getElementById('seleccionar-ataque')
    setcionSelecionarAtaque.style.display = 'none'
    let setcionReinciar = document.getElementById('reiniciar')
    setcionReinciar.style.display = 'none'


    //El elemento ya va a existir
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let setcionSelecionarAtaque = document.getElementById('seleccionar-ataque')
    setcionSelecionarAtaque.style.display = 'flex'

    let inputDarment = document.getElementById('darment')
    let inputDroconos = document.getElementById('droconos')
    let inputLeviant = document.getElementById('leviant')
    let spanMascotaJugador = document.getElementById('nombre-criatura-jugador')
    let image = new Image(150)
    let image1 = new Image(60)
    image1.src = 'assets/logo-versus.png';

    if(inputDarment.checked){
        spanMascotaJugador.innerHTML = 'darment'
        image.src = 'assets/darment.png';
        document.querySelector('#mascota-jugador').appendChild(image);
        document.querySelector('#logo-vs').appendChild(image1);
        selecionarMascotaEnemigo()
    }else if (inputDroconos.checked){
        spanMascotaJugador.innerHTML = 'droconos'
        image.src = 'assets/droconos.png';
        document.querySelector('#mascota-jugador').appendChild(image);
        document.querySelector('#logo-vs').appendChild(image1);
        selecionarMascotaEnemigo()
    }else if (inputLeviant.checked){
        spanMascotaJugador.innerHTML = 'leviant'
        image.src = 'assets/leviant.png';
        document.querySelector('#mascota-jugador').appendChild(image);
        document.querySelector('#logo-vs').appendChild(image1);
        selecionarMascotaEnemigo()
    }else{
        setcionSelecionarAtaque.style.display = 'none'
        alert('Seleccione una mascota')
        reiniciarJuego()
    }
}

function selecionarMascotaEnemigo(){
    let setcionSelecionarMascota = document.getElementById('seleccionar-mascota')
    setcionSelecionarMascota.style.display = 'none'

    let mascotaAletorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('nombre-criatura-enemigo')
    let image = new Image(150)

    if(mascotaAletorio == 1){
        spanMascotaEnemigo.innerHTML = 'darment'
        image.src = 'assets/darment.png'
        document.querySelector('#mascota-enemigo').appendChild(image)
        console.log('1')
        
    }
    if (mascotaAletorio == 2){
        spanMascotaEnemigo.innerHTML = 'droconos'
        image.src = 'assets/droconos.png'
        document.querySelector('#mascota-enemigo').appendChild(image)
        console.log('2')
    }
    if (mascotaAletorio == 3){
        spanMascotaEnemigo.innerHTML = 'leviant'
        image.src = 'assets/leviant.png'
        document.querySelector('#mascota-enemigo').appendChild(image)
        console.log('3')
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueEnemigoAleatorio()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueEnemigoAleatorio()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueEnemigoAleatorio()
}

function ataqueEnemigoAleatorio(){
    let ataqueAletorio = aleatorio(1, 3)
    if(ataqueAletorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAletorio == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }

    resultadoCombate()
}

function resultadoCombate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'|| ataqueJugador == 'AGUA' && ataqueEnemigo == 'TIERRA'){
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    }else{
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        crearMensaje("PERDISTE")
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        CrearMensajeFinal('Felicitaciones Ganastes')
    }else if(vidasJugador == 0){
        CrearMensajeFinal('Lo siento, Perdistes')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function CrearMensajeFinal(resultadoFinal) {
    //Habilitar boton de reinicio
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
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
