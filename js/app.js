let box = document.querySelector('.boxAni');

box.addEventListener("click", function() {
  box.classList.add('ani_image');

});

box.addEventListener("animationend", AnimationHandler, false);
function AnimationHandler () {
  box.classList.remove('ani_image');
}
