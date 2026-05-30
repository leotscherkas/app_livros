const rota = window.location.hash
console.log(rota)
console.log(typeof rota)
console.log(typeof '#inicio')
console.log(rota === '#inicio')
// = é atribuição de valor
// == ou === comparação de valor


if(rota === '#inicio'){
    console.log('pagina inicial')
} else if(rota === '#contato'){

} else{
    console.log('pagina n encontrada')
}

const idade = 18;
const sexo = 'F'
if(idade <18){
    console.log('nao pode entrar')
} else if(idade >= 30 && idade<60){
    console.log('pode entrar, mas cuidado')
} else if(idade <= 30 && sexo === 'F'){
    console.log('entrada free')
}

const estudante = true
!=
if(!estudante){
    console.log('meia entrada')
} else{
    console.log('entrada normal')
}