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
    let setcionSelecionarAtaque = document.getElementById('seleccionar-ataque')
    setcionSelecionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'hipodoge'
        selecionarMascotaEnemigo()
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'capipepo'
        selecionarMascotaEnemigo()
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'ratigueya'
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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(mascotaAletorio == 1)
        spanMascotaEnemigo.innerHTML = 'hipodoge'
    else if (mascotaAletorio == 2)
        spanMascotaEnemigo.innerHTML = 'capipepo'
    else
        spanMascotaEnemigo.innerHTML = 'ratigueya'
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
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasJugador.innerHTML = vidasEnemigo
    }else{
        vidasJugador--
        crearMensaje("PERDISTE")
        spanVidasJugador.innerHTML = vidasJugador
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
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function CrearMensajeFinal(resultadoFinal) {
    let setcionReinciar = document.getElementById('reiniciar')
    setcionReinciar.style.display = 'block'

    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
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
