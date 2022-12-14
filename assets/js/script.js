// Hero Section Mouse Interaction
var heroSection=document.querySelector("section#hero");
heroSection.addEventListener('mousemove',e=>{
    // Get the root element
    var r = document.querySelector(':root');

    r.style.setProperty('--heroPositionX', e.clientX);
    r.style.setProperty('--heroPositionY', e.clientY);
})