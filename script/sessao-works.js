var larguraImagens = function (event){
    var imagens = document.getElementsByClassName('works-imagens')
    var sessao = document.getElementById('section-works')
    var lsessao = parseFloat(window.getComputedStyle(sessao).getPropertyValue('width'))

    console.log(lsessao)
    lsessao = (lsessao - 75)/4
    console.log(lsessao)

    for(var i = 0; i < imagens.length; i++){
        imagens[i].style.width = `${lsessao}px`
    }
}
window.addEventListener('load', larguraImagens, false)
window.addEventListener('resize', larguraImagens, false)