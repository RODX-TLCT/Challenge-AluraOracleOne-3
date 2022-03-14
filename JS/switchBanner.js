/*  
    develop and edited by RODX 
    Ⓒcopyright - RODX 2022
    JS document
    function Document
*/

let x = window.matchMedia("(max-width:450)")
switchBanner(x)

function switchBanner(x){
    if (x.matches){
        alert("pc");
    } else {
        alert("smart")
        
       let banner = document.getElementsById("banner-inicio").src="IMG/banner-pc.jpg";
    }
}