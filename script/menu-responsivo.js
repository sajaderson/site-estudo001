var elemento = document.getElementsByClassName('conteudo-services')[0]
var propriedade = window.getComputedStyle(elemento).getPropertyValue('width')
var divult = document.querySelector('.conteudo-services:last-child')
divult.style.flexGrow = 0
divult.style.flexBasis = 'auto';
divult.style.width = propriedade

function menuResponsivo(){
    var menu = document.querySelector('.menu')
    menu.classList.toggle('active')
}

/* var bt = document.getElementById('bt-esq')
bt.addEventListener('click', function(){
    var slideShow = document.getElementById('works-slide')
    slideShow.scrollBy(-300, 0)
})

var bt = document.getElementById('bt-dir')
bt.addEventListener('click', function(){
    var slideShow = document.getElementById('works-slide')
    slideShow.scrollBy(328, 0)
}) */