/* 🧠 Exercícios Avançados – Operadores Lógicos e Racionais com Condições */
const idade = 16;
if (idade < 16){
    console.log("Não pode votar");
}
else if (idade == 16 || idade == 17 || idade > 70 ){
    console.log("Voto Opcional.")
}
else{
    console.log("Voto Obrigatório");
}