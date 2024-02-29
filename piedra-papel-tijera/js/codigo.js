//Declaras las funciones para poder utilizarlas
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1)
        resultado = "PIEDRA 🗻"
    else if(jugada == 2)
        resultado = "PAPEL 📄"
    else if(jugada == 3)
        resultado = "TIJERA ✂"
    else
        resultado = "MAL ELEGIDO"
    return resultado
}
function combate(jugador, pc){
    let resultado
    if(pc == jugador)
        resultado = "EMPATE"
    else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
        resultado = "GANASTES"
        triunfos ++
    }else{
        resultado = "PERDISTES"
        perdidas ++
    }
    return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //Condicionales
    alert("PC elige: "+ eleccion(pc))
    alert("Tu eliges: "+ eleccion(jugador))
    alert(combate(jugador, pc))
}

alert("Ganastes: " + triunfos + "veces. \nPerdistes: "+ perdidas+ "veces")