// Get the root element
var r = document.querySelector(':root');
var sprinkles=document.querySelectorAll("#hero .sprinkles span");

// Hero Section Mouse Interaction
// var body=document.querySelector("body");
var reduceBy=2;
var clientY=20;
var clientX=20;
var reduce=false;
window.addEventListener('scroll',e=>{
    if(r){        
        if(clientX>=250) reduce=true;
        if(clientX<=100) reduce=false;

        console.log(reduce,clientX);

        if(reduce){
            clientY-=reduceBy;
            clientX-=reduceBy;
        } else {
            clientY+=reduceBy;
            clientX+=reduceBy;
        }

        // clientY=e.clientX;
        // clientY=e.clientY;



        r.style.setProperty('--heroPositionX', clientX);
        r.style.setProperty('--heroPositionY', clientY);

        // if(sprinkles){
        //     // console.log(sprinkles);
        //     for(i=0;i<=sprinkles.length;i++){
        //         if(sprinkles[i]){
        //             currentLeft=sprinkles[i].offsetLeft;
        //             console.log(currentLeft,e.clientX/100);
        //             sprinkles[i].style.left=currentLeft-e.clientX/100+'px';
        //         }
        //     }

        // }
    }
})