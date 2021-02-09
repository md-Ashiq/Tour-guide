let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let container=document.querySelector(".container");
let counter=0;
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);

function nextImage(){
    if (counter==4) {
        counter=-1;
        
    }
    counter++;
    container.style.backgroundImage= `url(blog${counter}.jpg)`
}
function prevImage(){
    if (counter==0){
        counter=5;
    }
    counter--;
    container.style.backgroundImage= `url(blog${counter}.jpg)`
}
