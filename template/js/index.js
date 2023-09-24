// DOM elements
const answerNoBtn = document.getElementById('answerNo')

// functions
const moveBtn = function () {
  let top = Math.floor(Math.random() * 100) * 2;
  let left = Math.floor(Math.random() * 100) * 2;

  answerNoBtn.style.transform = `translate(${top}px, ${left}px)`
}

// system
answerNoBtn.addEventListener('mouseover', moveBtn)
answerNoBtn.addEventListener('click', moveBtn)