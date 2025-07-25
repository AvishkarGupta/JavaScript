
let gamesql = []
let usersql = []
let level = 0
let isStarted = false;
let levelPara = document.querySelector(".level")

let color = ["teal", "lavender", "grotto", "rose"]

function flash(btn) {
  let button = document.querySelector(`#${btn}`)
  button.classList.add("flash")
  setTimeout(function () {
    button.classList.remove("flash")
  }, 250)

}
function userFlash(btn) {
  let button = document.querySelector(`#${btn}`)
  button.classList.add("userFlash")
  setTimeout(function () {
    button.classList.remove("userFlash")
  }, 250)

}

function levelUp() {
  level++
  levelPara.innerHTML = `level ${level}`

  let random = Math.floor(Math.random() * 4)
  let idx = color[random]
  gamesql.push(idx)
  console.log(gamesql)
  flash(idx)
}

document.addEventListener("keypress", function () {
  if (isStarted == false) {
    isStarted = true;
    levelUp()
    console.log("Starting the game")
  }
})

function simonCheck(crrIdx) {
  let idx = crrIdx
  // console.log(idx)
  if (usersql[idx] === gamesql[idx]) {
    if (usersql.length == gamesql.length) {
      usersql = []
      // console.log("SimonChecked")
      setTimeout(function () {
        levelUp()
      }, 1000)
    }
  } else {
    levelPara.innerHTML = `Game Over. your score is ${level-1} <br/> Press any key to start again.`
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "#bfd7ed"
    }, 100)
    reset()
  }
}

function buttonPress() {
  userFlash(this.id)
  usersql.push(this.id)
  // console.log(usersql)
  simonCheck(usersql.length - 1)
}

let buttons = document.querySelectorAll(".btn")
for (btn of buttons) {
  btn.addEventListener("click", buttonPress)
}

function reset() {
  isStarted = false;
  level = 0;
  gamesql = []
  usersql = []

}