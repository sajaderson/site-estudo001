window.addEventListener('resize', function(){     
    var divI = document.getElementById('divI')
    var divF = document.getElementById('divF')   
    var ldivI = window.getComputedStyle(divI).getPropertyValue('width')
    
    var rect1 = divI.getBoundingClientRect()
    var rect2 = divF.getBoundingClientRect()

    if(rect2.top != rect1.top){
        divF.style.flexBasis = 'auto'
        divF.style.flexGrow = 0
        divF.style.width = ldivI
    }else{
        divF.style.flexBasis = '200px'
        divF.style.flexGrow = 1
    }
})