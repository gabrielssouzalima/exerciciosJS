/* 🧠 Exercícios de Laços de Repetição - Validador de nome */
let nome = prompt(`Digite seu nome: `)
if(nome !== ``){
      console.log(`Olá ${nome}`)
}

while(nome === ``){
  let perguntaUsuario = prompt(`Campo Vazio. Digite novamente: `)
  if(perguntaUsuario !== ``){
      console.log(`Olá ${perguntaUsuario}`)
      break
    }
  }