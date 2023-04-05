let box = document.querySelector('.boxAni');

box.addEventListener("click", function() {
  box.classList.add('ani_image');

});

box.addEventListener("animationend", AnimationHandler, false);
function AnimationHandler () {
  box.classList.remove('ani_image');
}




const paragraphs = {
    c: document.querySelector(".symbolC"),
    l: document.querySelector(".symbolL"),
    s: document.querySelector(".symbolS"),
    h: document.querySelector(".symbolH"),
    w: document.querySelector(".symbolW"),
    e: document.querySelector(".symbolE")

  };
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (paragraphs[key]) {
      paragraphs[key].scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });

