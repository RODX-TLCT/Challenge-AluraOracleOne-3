/*  
    develop and edited by RODX 
    Ⓒcopyright - RODX 2023
    JS document
    function Document
*/

window.addEventListener('scroll', function () {
    let objTrigger = document.getElementById('trigger');
    let atrivObjTrigger = objTrigger.getBoundingClientRect().bottom;
    let sizeWindow = window.innerHeight/4;

    /*Styles*/
    var animationIn = 'progressbarAnimationIn 2.5s ease-out';
    var animationOut = 'progressbarAnimationOut 1.5s ease-out';
    var widthIn = 'var(--w)';
    var widthOut = '0%'

    /*ObjsAnimated*/
    let ObjAnimated1 = document.getElementById('progressbar-frontend'); 
    let ObjAnimated2 = document.getElementById('progressbar-backend');
    let ObjAnimated3 = document.getElementById('progressbar-database');
    let ObjAnimated4 = document.getElementById('progressbar-liderazgo');
    let ObjAnimated5 = document.getElementById('progressbar-empatia');
    let ObjAnimated6 = document.getElementById('progressbar-creatividad');
    let ObjAnimated7 = document.getElementById('progressbar-trabajo-equipo');

    console.log('position Object: ' + atrivObjTrigger);
    console.log('size window: ' + sizeWindow);

    if(atrivObjTrigger > (sizeWindow*1.8) && atrivObjTrigger < (sizeWindow*3.7 ) ){
        console.log('flg-1= true');
        ObjAnimated1.style.animation = animationIn;
        ObjAnimated2.style.animation = animationIn;
        ObjAnimated3.style.animation = animationIn;
        ObjAnimated4.style.animation = animationIn;
        ObjAnimated5.style.animation = animationIn;
        ObjAnimated6.style.animation = animationIn;
        ObjAnimated7.style.animation = animationIn;
        ObjAnimated1.style.width = widthIn;
        ObjAnimated2.style.width = widthIn;
        ObjAnimated3.style.width = widthIn;
        ObjAnimated4.style.width = widthIn;
        ObjAnimated5.style.width = widthIn;
        ObjAnimated6.style.width = widthIn;
        ObjAnimated7.style.width = widthIn;
    } else if (atrivObjTrigger < sizeWindow || atrivObjTrigger > (sizeWindow*3.5)) {
        console.log('flg-1= false');
        ObjAnimated2.style.animation = animationOut;
        ObjAnimated3.style.animation = animationOut;
        ObjAnimated4.style.animation = animationOut;
        ObjAnimated1.style.animation = animationOut;
        ObjAnimated5.style.animation = animationOut;
        ObjAnimated6.style.animation = animationOut;
        ObjAnimated7.style.animation = animationOut;
        ObjAnimated3.style.width = widthOut;
        ObjAnimated1.style.width = widthOut;
        ObjAnimated4.style.width = widthOut;
        ObjAnimated2.style.width = widthOut;
        ObjAnimated5.style.width = widthOut;
        ObjAnimated6.style.width = widthOut;
        ObjAnimated7.style.width = widthOut;
    } 
})