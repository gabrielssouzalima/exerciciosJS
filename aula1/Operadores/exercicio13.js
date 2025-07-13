let idade = 12;
let acompanhado = true;
if (idade >= 14) {
    console.log("Acesso liberado.");
} else if (idade < 14 && acompanhado === true) {
    console.log("Acesso liberado.");
} else {
    console.log("Entrada negada.");
}