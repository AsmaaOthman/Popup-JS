var myImages = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".light-box-container");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var imgIndex = 0;

for(var i=0; i<myImages.length; i++){
    myImages[i].addEventListener("click", showBox);
}

function showBox(e){
    var imgSrc = e.target.src;
    lightBoxContainer.style.transform = "scale(1)";
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+imgSrc+")";
    imgIndex = myImages.indexOf(e.target);
}

close.addEventListener("click", hidenBox);
function hidenBox(){
    lightBoxContainer.style.transform = "scale(0)";
}

next.addEventListener("click", goNext);
function goNext(){ 
    imgIndex++;
    if(imgIndex == myImages.length){
        imgIndex = 0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+myImages[imgIndex].src+")";
}

prev.addEventListener("click", goPrev);
function goPrev(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = myImages.length-1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+myImages[imgIndex].src+")";
}

document.addEventListener("keydown", addEventKeBord )

function addEventKeBord (e){
    if (e.key == "ArrowRight"){
        goNext();
    }
    else if(e.key == "Escape"){
        hidenBox();

    }
    else if(e.key == "ArrowLeft"){
        goPrev();
    }
    

    console.log(e)
}