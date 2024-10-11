const nome = "Flavinho"
let quantExp = 520
let ligas = "Ferro"

switch (true){
    case (quantExp <= 1.000):
        ligas = "Ferro"
        console.log("Você está na liga Ferro")
        break;
    case (quantExp > 1.001 && quantExp < 2.000):
        console.log("Você está na liga Bronze")
        break;
    case (quantExp > 2.001 && quantExp < 5.000):
        console.log("Você está na liga Prata")
        break;
    case (quantExp > 5.001 && quantExp < 7.000):
        console.log("Você está na liga Ouro")
        break;
    case (quantExp > 7.001 && quantExp < 8.000):
        console.log("Você está na liga Platina")
        break;
    case (quantExp > 8.001 && quantExp < 9.000):
        console.log("Você está na liga Ascendente")
        break;
    case (quantExp > 9.001 && quantExp < 10.000):
        console.log("Você está na liga Imortal")
        break;
    default:
        console.log("Você está na liga Radiante")
}

console.log("O herói de nome: " + nome + " está no nível de " + ligas)