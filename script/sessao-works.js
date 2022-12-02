/* #### Aplicando a mesma largura e altura das divs da sessão Services anterior na divs da sessão Works, para manter o alinhamento. #### */

var larguraImagens = function (event){
    var elementoRefServices = document.getElementById('divI')
    var larguradivI = window.getComputedStyle(elementoRefServices).getPropertyValue('width')
    var alturadivI = parseFloat(window.getComputedStyle(elementoRefServices).getPropertyValue('height'))
    var imagens = document.getElementsByClassName('works-imagens')    
    var elementoRefWorks = document.getElementById('conteudo-works')
    var elementoEsconder = document.getElementById('esconderBarra')

    elementoEsconder.style.height = `${alturadivI - 61}px` // 61 é o tamanho do botão com margin e padding.
    elementoRefWorks.style.width = larguradivI
    elementoRefWorks.style.minWidth = larguradivI

    for(var i = 0; i < imagens.length; i++){
        imagens[i].style.width = larguradivI
        imagens[i].style.height = `${alturadivI - 61}px` // 61 é o tamanho do botão com margin e padding.
    }
}
window.addEventListener('load', larguraImagens, false)
window.addEventListener('resize', larguraImagens, false)


/* ##################### Ação de passar a imagens ################# */

var bt = document.getElementById('bt-esq')
bt.addEventListener('click', function(){
    var slideShow = document.getElementById('works-slide')
    slideShow.scrollBy(-337.5, 0)
})

var bt = document.getElementById('bt-dir')
bt.addEventListener('click', function(){
    var slideShow = document.getElementById('works-slide')
    slideShow.scrollBy(337.5, 0)
})