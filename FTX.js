const images = document.querySelectorAll("[data-image]");
const slider = document.querySelector('[data-slide]');

let length = images.length;
let index = 0;
let start = true;
let hover = false;

function handleImages(){
    if(hover) return
    if(!start) {
        images.forEach(image=>{
            image.classList.remove('seen');
        });
        images[index].classList.add('seen')
    }
    start = false;
    index ++;
    if(index === length) index = 0;
}

slider.addEventListener('mouseover', ()=> hover = true);
slider.addEventListener('mouseout', ()=> hover = false);

setInterval(handleImages , 4000);