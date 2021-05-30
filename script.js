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
    lightBoxContainer.style.display = "flex";
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+imgSrc+")";
    imgIndex = myImages.indexOf(e.target);
}

close.addEventListener("click", hidenBox);
function hidenBox(){
    lightBoxContainer.style.display = "none";
}

next.addEventListener("click", goNext);
function goNext(){
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+myImages[imgIndex].src+")";
    imgIndex++;
    if(imgIndex == myImages.length){
        imgIndex = 0;
    }
}

prev.addEventListener("click", goPrev);
function goPrev(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = myImages.length-1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+myImages[imgIndex].src+")";
}

document.addEventListener("keydown", function(e){
    if (e.keyCode == 39){
        goNext();
    }
    else if(e.keyCode == 27){
        hidenBox();

    }
    else if(e.keyCode == 37){
        goPrev();
    }
    
})