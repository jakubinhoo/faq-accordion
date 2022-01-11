const firstQuestion = document.getElementById("firstQuestion")
const secondQuestion = document.getElementById("secondQuestion")
const thirdQuestion = document.getElementById("thirdQuestion")
const fourthQuestion = document.getElementById("fourthQuestion")
const fifthQuestion = document.getElementById("fifthQuestion")

const firstText = document.getElementById("first-text")
const secondText = document.getElementById("second-text")
const thirdText = document.getElementById("third-text")
const fourthText = document.getElementById("fourth-text")
const fifthText = document.getElementById("fifth-text")

const firstSvg = document.getElementById("first-svg")
const secondSvg = document.getElementById("second-svg")
const thirdSvg = document.getElementById("third-svg")
const fourthSvg = document.getElementById("fourth-svg")
const fifthSvg = document.getElementById("fifth-svg")

const h2 = document.getElementsByTagName("h2")

function resetAllButtons() {
  document.getElementById("first-h2").style.fontWeight = 400
  document.getElementById("second-h2").style.fontWeight = 400
  document.getElementById("third-h2").style.fontWeight = 400
  document.getElementById("fourth-h2").style.fontWeight = 400
  document.getElementById("fifth-h2").style.fontWeight = 400
}

firstQuestion.onclick = function () {
  resetAllButtons()
  document.getElementById("first-h2").style.fontWeight = 800
  firstText.style.display = "block"
  secondText.style.display = "none"
  thirdText.style.display = "none"
  fourthText.style.display = "none"
  fifthText.style.display = "none"
}

secondQuestion.onclick = function () {
  resetAllButtons()
  document.getElementById("second-h2").style.fontWeight = 800
  firstText.style.display = "none"
  secondText.style.display = "block "
  thirdText.style.display = "none"
  fourthText.style.display = "none"
  fifthText.style.display = "none"
}
thirdQuestion.onclick = function () {
  resetAllButtons()
  document.getElementById("third-h2").style.fontWeight = 800
  firstText.style.display = "none"
  secondText.style.display = "none"
  thirdText.style.display = "block"
  fourthText.style.display = "none"
  fifthText.style.display = "none"
}
fourthQuestion.onclick = function () {
  resetAllButtons()
  document.getElementById("fourth-h2").style.fontWeight = 800
  firstText.style.display = "none"
  secondText.style.display = "none"
  thirdText.style.display = "none"
  fourthText.style.display = "block"
  fifthText.style.display = "none"
}
fifthQuestion.onclick = function () {
  resetAllButtons()
  document.getElementById("fifth-h2").style.fontWeight = 800
  firstText.style.display = "none"
  secondText.style.display = "none"
  thirdText.style.display = "none"
  fourthText.style.display = "none"
  fifthText.style.display = "block"
}
