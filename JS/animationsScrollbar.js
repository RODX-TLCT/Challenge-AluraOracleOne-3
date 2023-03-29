/*  
    develop and edited by RODX 
    Ⓒcopyright - RODX 2023
    JS document
    function Document
*/

window.addEventListener('scroll', function () {
    let objTrigger = document.getElementById('trigger');
    let positionObjTrigger = objTrigger.getBoundingClientRect().top;
    let sizeWindow = window.innerHeight;

    console.log('position Object: ' + positionObjTrigger);
    console.log('size window: ' + sizeWindow);
})