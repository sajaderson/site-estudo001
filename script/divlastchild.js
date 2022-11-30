var elemento = document.getElementsByClassName('conteudo-services')[0]
var propriedadeinicial = window.getComputedStyle(elemento).getPropertyValue('width')
var divlastchild = document.querySelector('.conteudo-services:last-child')
divlastchild.style.flexGrow = 0
divlastchild.style.flexBasis = 'auto';
divlastchild.style.width = propriedadeinicial

var body = document.body
var largurainial = body.clientWidth

window.addEventListener('resize', function(){
    var propriedaderesize = window.getComputedStyle(elemento).getPropertyValue('width')
    divlastchild.style.width = propriedaderesize
    
    //var browserZoomLevel = Math.round(window.devicePixelRatio * 100); // mostra o nivel do Zoom
    body = document.body
    var larguraresize = body.clientWidth

    if(larguraresize == largurainial){
        divlastchild.style.width = propriedadeinicial
        /* divlastchild.style.flexGrow = 1
        divlastchild.style.flexBasis = '200px'; */
    }
})
