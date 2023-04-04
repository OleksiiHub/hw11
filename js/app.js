let box = document.querySelector('.boxAni');

box.addEventListener("click", function() {
  box.classList.add('ani_image');

});

box.addEventListener("animationend", AnimationHandler, false);
function AnimationHandler () {
  box.classList.remove('ani_image');
}




const searchNav = document.querySelector('.navSymbol');

searchNav.addEventListener('keyup', (event) => {
    if(event.key === "C" || "c") {
        window.location.href = 'C';
    };
    if(event.key === "L" || "l") {
        window.location.href = '#L';
    };
    if(event.key === "S" || "s") {
        window.location.href = '#S';
    };
    if(event.key === "H" || "h") {
        window.location.href = '#H';
    };
    if(event.key === "W" || "w") {
        window.location.href = '#W';
    };
    if(event.key === "E" || "e") {
        window.location.href = 'E';
    };
});

