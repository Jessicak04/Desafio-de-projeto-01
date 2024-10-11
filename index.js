const nome = "Jessiquinha"
let quantExp = 245
let ligas = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]
let classes = ["Curandeiro","Mago","Cavaleiro","Arqueiro"]

    console.log("Se torne o melhor " + classes[3] + " deste mundo!")
if(quantExp < 1000){
    ligas = ligas[0]
    console.log("Você está na liga Ferro")  
}else if(quantExp >= 1000 && quantExp <2000){
    ligas = ligas[1]
    console.log("Você está na liga Bronze")
}else if(quantExp >2001 && quantExp <5000){
    ligas = ligas[2]
    console.log("Você está na liga Prata")
}else if(quantExp >5001 && quantExp <7000){
    ligas = ligas[3]
    console.log("Você está na liga Ouro")
}else if(quantExp >7001 && quantExp <8000){
    ligas = ligas[4]
    console.log("Você está na liga Platina")
}else if(quantExp >8001 && quantExp <9.000){
    ligas = ligas[5]
    console.log("Você está na liga Ascendente")
}else if(quantExp >9.001 && quantExp <10000){
    ligas = ligas[6]
    console.log("Você está na liga Imortal")
}else {
    ligas = ligas[7]
    console.log("Você está na liga Radiante")
}

console.log("O herói " + classes[3] + " de nome: " + nome + " está no nível de " + ligas)
