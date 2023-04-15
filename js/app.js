let box = document.querySelector('.boxAni');


function renderRepos(myRepos) {
  let htmlStr = myRepos.reduce(function (acc, repos) {
    return acc + `<tr>
        <td>${repos.full_name}</td>
        <td><a href = "${repos.html_url}">${repos.html_url}</a></td>
        <td><a>${repos.description || '---'}</a></td>
    </tr>`;
  }, '');
  document.querySelector('.table tbody').innerHTML = htmlStr;
}



let myRepos = [];

fetch('https://api.github.com/users/OleksiiHub/repos').then(function (reposAll) {
  return reposAll.json();
}).then(function (reposAll) {
  myRepos = reposAll;
  renderRepos(myRepos);
});



box.addEventListener("click", function () {
  box.classList.add('ani_image');

});

box.addEventListener("animationend", AnimationHandler, false);
function AnimationHandler() {
  box.classList.remove('ani_image');
}

const paragraphs = {
  c: document.querySelector(".symbolC"),
  l: document.querySelector(".symbolL"),
  s: document.querySelector(".symbolS"),
  h: document.querySelector(".symbolH"),
  w: document.querySelector(".symbolW"),
  e: document.querySelector(".symbolE"),
  m: document.querySelector(".symbolM")

};
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (paragraphs[key]) {
    paragraphs[key].scrollIntoView({ block: "start", behavior: "smooth" });
  }
});





