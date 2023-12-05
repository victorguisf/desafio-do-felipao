// Mensagem Inicial
console.log("Bem-vindo (a)")
console.log("Digite seu nome de herói")

let nickname = "Pandora"

console.log(nickname + " sua jornada começa agora!")

// Valor declarado do XP
let xpAdquirido = 3500

// Estrutura de decisão

if(xpAdquirido <= 1000){
    console.log("O Herói " + nickname + " está no nível Ferro.")
}else if(xpAdquirido >= 1001 && xpAdquirido <= 2000){
    console.log("O Herói " + nickname + " está no nível Bronze.")
}else if(xpAdquirido >= 2001 && xpAdquirido <= 5000){
    console.log("O Herói " + nickname + " está no nível Prata.")
}else if(xpAdquirido >= 5001 && xpAdquirido <=7000){
    console.log("O Herói " + nickname + " está no nível Ouro.")
}else if(xpAdquirido >= 7001 && xpAdquirido <= 8000){
    console.log("O Herói " + nickname + " está no nível Platina.")
}else if(xpAdquirido >= 8001 && xpAdquirido <= 9000){
    console.log("O Herói " + nickname + " está no nível Ascendente.")
}else if(xpAdquirido >= 9001 && xpAdquirido <= 10000){
    console.log("O Herói " + nickname + " está no nível Imortal.")
}else if(xpAdquirido >=10001){
    console.log("O Herói " + nickname + " está no nível Radiante.")
}

