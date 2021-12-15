let img = document.querySelector("img");

let index = 1;

function changeImage() {
    index++;
    if(index > 3) {
        index = 1;
    }
    
    img.src = "kuvat/forest" + index + ".jpg";
}