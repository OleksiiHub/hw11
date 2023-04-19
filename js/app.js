'use strict';

fetch('https://api.github.com/users/OleksiiHub/repos').then(function (reposAll) {
  return reposAll.json();
}).then(function (reposAll) {
  document.querySelector('tbody').innerHTML = reposAll.reduce(function (acc, repos) {
    return acc + `<tr>
        <td>${repos.full_name}</td>
        <td><a href = "${repos.html_url}">${repos.html_url}</a></td>
        <td><a>${repos.description || '---'}</a></td>
    </tr>`;
  }, '');
});
