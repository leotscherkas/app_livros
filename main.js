import navbar from './components/navbar/navbar.js'
import home from './components/paginas/menu.js'
import servicos from './components/paginas/servicos.js'
import sobre from './components/paginas/sobre.js'
import contato from './components/paginas/contato.js'

contato()
navbar()



const app = document.getElementById('app')
app.innerHTML = '<h1> ola mundo</h1>'
// app.textContent = 'olá mundo'







let rota = window.location.hash || '#inicio'
render()
window.addEventListener('hashchange',()=>{
const rota = window.location.hash
render()
}
)

function render(){
    switch(rota){
    case '#inicio':
        app.innerHTML= home
        break;
    
    case '#sobre':
        app.innerHTML = sobre;
        break;
    
    case '#contato':
        app.innerHTML = contato;
        break;
    case '#servicos':
        app.innerHTML = servicos;
        break;

    default:
        app.innerHTML = `<h1> pagina n encontrada</h1>`
        
        
}
}

// console.log('contagem regressiva')
// for(let i = 100; i>=0; i--){
//     console.log(i);
// }
// console.log('contagem progressiva')
// for(let i = 0; i<=100; i++){
//     if(i % 2 === 0)
//         console.log(i + ' é par')
// }



// let temperatura = 20;
// let ligado = true;
// while(ligado){
//     console.log('a temperatura atual é: '+ temperatura);
//     temperatura += 0.05;
//     if (temperatura <=30){
//         console.log('enviar email de alerta')
//     } else if(temperatura>33){
//         ligado= false;
//         console.log('desligando o sistema')
//         break;
//     }
// }