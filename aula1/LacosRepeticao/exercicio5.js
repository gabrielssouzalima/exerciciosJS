/* 🧠 Exercícios de Laços de Repetição - Validador de senha */
let senha = `admin123`
const tentativas = 1;
while (tentativas < 4){
    perguntaUsuario = prompt(`Digite a senha: `)
    if (perguntaUsuario === senha){
        console.log(`Acesso Permitido`)
        break
    }
    else{
        console.log(`Tente Novamente`)
    }
    tentativas++
}
if (tentativas === 4){
console.log(`Acesso Negado`)
}
