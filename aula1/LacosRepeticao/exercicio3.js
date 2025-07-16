/* 🧠 Exercícios de Laços de Repetição -Fica pedindo ao usuário uma senha até ele digitar "senha123".
Quando acertar, mostre: "Acesso liberado".. */

let senha = '1234'
while (true){
    let senhaDigitada = prompt("Digite sua senha: ")
    if(senha === senhaDigitada){
        console.log("Senha Correta")
        break
    }
    else{
        console.log("Senha incorreta")
    }
}