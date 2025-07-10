/* Exercício 9 = Declare duas variáveis anoAtual e anoNascimento. 
Calcule a idade da pessoa automaticamente */
const anoAtual = 2025;
const anoNascimento = prompt("Digite seu ano de nascimento: ");
const calcularIdade = (anoAtual - anoNascimento);
if (anoNascimento <= 2007){
    console.log(`Você tem ${calcularIdade}. É maior de idade.`)
}
else{
    console.log(`Você tem ${calcularIdade}. É menor de idade.`)
}