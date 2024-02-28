function iniciarJuego(){
    //El elemento ya va a existir
    let botonMascotaJugador = document.getElementById('boton-mascota')
    //Escuchar eventos de click
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
}

function selecionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    if(inputHipodoge.checked)
        alert('Selecciono a hipodoge')
    else if (inputCapipepo.checked)
        alert('Selecciono a hipodoge')
    else if (inputRatigueya.checked)
        alert('Selecciono a ratigueya')
    else
        alert('Seleccione una mascota')
}

//Nos avisa que se cargo todo el html
window.addEventListener('load', iniciarJuego)
