// Mensagem Inicial
console.log("Bem-vindo (a)")

// Usei o comando "return" abaixo após pesquisar, pois queria que houvesse algo que parasse de ler o código caso
//a idade mínima não fosse antendida. Esse conteúdo ainda não foi visto, por isso surgiu a dúvida.

let idade = "20"
console.log("Digite sua idade:" + idade)
switch (true){
    case idade <= 11:
    console.log("Você não possui idade o suficiente para prosseguir.")
    return;
    default:
    console.log("Digite seu nome de herói")
    
}

let nickname = "Pandora"

console.log(nickname + " sua jornada começa agora!")

// Valor declarado do XP
let xpAdquirido = 3500
let rankDoHeroi = ""

// Estrutura de decisão

if(xpAdquirido <= 1000){
    rankDoHeroi = "Ferro"
}else if(xpAdquirido >= 1001 && xpAdquirido <= 2000){
    rankDoHeroi = "Bronze"
}else if(xpAdquirido >= 2001 && xpAdquirido <= 5000){
    rankDoHeroi = "Prata"
}else if(xpAdquirido >= 5001 && xpAdquirido <=7000){
    rankDoHeroi = "Ouro"
}else if(xpAdquirido >= 7001 && xpAdquirido <= 8000){
    rankDoHeroi = "Platina"
}else if(xpAdquirido >= 8001 && xpAdquirido <= 9000){
    rankDoHeroi = "Ascendente"
}else if(xpAdquirido >= 9001 && xpAdquirido <= 10000){
    rankDoHeroi = "Imortal"
}else if(xpAdquirido >=10001){
    rankDoHeroi = "Radiante"
}
console.log("O Herói " + nickname + " está no nível " + rankDoHeroi)