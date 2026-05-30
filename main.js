const navbar = document.getElementById('navbar');
navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#" class="bem-navbar__brand">Brand</a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                <li class="bem-navbar__item">
                    <a href="#inicio" class="bem-navbar__link bem-navbar__link--active">Inicial</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#sobre" class="bem-navbar__link">Sobre</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#contato" class="bem-navbar__link">Contato</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#servicos" class="bem-navbar__link">Serviços</a>
                </li>
            </ul>
        </nav>`

const app = document.getElementById('app')
app.innerHTML = '<h1> ola mundo</h1>'
// app.textContent = 'olá mundo'

const home = `<h1> esta é a pagina inicial</h1>
    <p> bem vindo ao meu site</p>`

const sobre = `<h1> esta é a pagina sobre</h1>
<p> este site é um exemplo de SPA usando JS puro</p>`

const contato = `<h1> esta é a pagina de contato</h1>
<p>entre em contato conosco pelo email</p>`
const servicos = `<h1> esta é a pagina de serviços</h1>
<p>serviços</p>`


window.addEventListener('hashchange',()=>{
const rota = window.location.hash
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
)