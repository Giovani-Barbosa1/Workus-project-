/* Puxando classes */

const menu = document.getElementById('menu')
const nav = document.getElementById('navegacao')

function trocaClasseOculta (){

    nav.classList.toggle('oculta')
}

menu.addEventListener('click', trocaClasseOculta)