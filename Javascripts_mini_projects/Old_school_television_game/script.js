const space = new Set()
document.body.style.userSelect = "none";

const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "#35030eff"
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.height = "95dvh";
body.style.alignItems = "center";

// Heading and rules
const heading = document.getElementById("heading")
heading.style.color = "white"
heading.style.padding = "0.5rem"
heading.style.fontWeight = "700"

const popup = document.createElement("div");
heading.addEventListener("mouseover", () => {
  heading.style.transform = "scale(1.01)";
  heading.style.color = "goldenrod";
  heading.style.transition = "0.2s linear";
  popup.innerHTML = `Rules:<br>Fill the boxes at unique place<br>Overlapping will result in loss<br>You will get 3 seconds to place a box<br>Good Luck!!`;
  heading.appendChild(popup);

});
heading.addEventListener("mouseout", () => {
  heading.style.transform = "scale(1)";
  heading.style.color = "white";
  heading.removeChild(popup)
});

// Container------------------
const container = document.querySelector(".container")
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.overflow = "hidden";
container.style.position = "relative";
container.style.width = "30rem"
container.style.height = "30rem"
container.style.backgroundColor = "#900020";
container.style.borderRadius = "5px";
container.style.border = "1px solid white";

// Buttons---------------------
const buttonSection = document.querySelector(".buttons")
buttonSection.style.marginTop = "1rem";
buttonSection.style.padding = "2rem";
buttonSection.style.border = "2px solid white";
buttonSection.style.borderRadius = "10px";
buttonSection.style.width = "30rem"
buttonSection.style.height = "10rem"
buttonSection.style.color = "yellow";
buttonSection.style.backgroundColor = "#f18379ff";
buttonSection.style.boxSizing = "border-box"
buttonSection.style.alignContent = "center"

// -----------Buttons Css--------------------------------------
const commonCss = (anything) => {
  anything.setAttribute("id", "button")
  anything.style.backgroundColor = "#ebe8e5ff"
  anything.style.color = "black"
  anything.style.fontWeight = "600"
  anything.style.margin = "0.5rem"
  anything.style.padding = "0.4rem"
  anything.style.border = "none"
  anything.style.borderRadius = "10px"
  anything.style.boxShadow = "2px 2px 2PX #35030eff"
}

const startStop = (anything) => {
  anything.setAttribute("id", "button")
  anything.style.backgroundColor = "#f6c695ff"
  anything.style.color = "black"
  anything.style.fontWeight = "600"
  anything.style.margin = "0rem 0.5rem 0rem 1rem"
  anything.style.padding = "0.8rem 1rem 0.8rem 1rem"
  anything.style.border = "none"
  anything.style.borderRadius = "10px"
  anything.style.boxShadow = "2px 2px 2PX #35030eff"
}
const start = document.createElement("button")
buttonSection.append(start)
start.append(document.createTextNode("Click me when you are ready to play"))
startStop(start)

const stop = document.createElement("button")
buttonSection.append(stop)
stop.append(document.createTextNode("Stop"))
startStop(stop)

// ---------buttons------------
const leftBtn = document.createElement("button")
buttonSection.append(leftBtn)
leftBtn.append(document.createTextNode("Move Left"))
commonCss(leftBtn)

const rightBtn = document.createElement("button")
buttonSection.append(rightBtn)
rightBtn.append(document.createTextNode("Move Right"))
commonCss(rightBtn)

const downBtn = document.createElement("button")
buttonSection.append(downBtn)
downBtn.append(document.createTextNode("Move Down"))
commonCss(downBtn)

const upBtn = document.createElement("button")
buttonSection.append(upBtn)
upBtn.append(document.createTextNode("Move Up"))
commonCss(upBtn)

// hover effect-------------
const hover = document.querySelectorAll("#button")
// console.log(hover)
hover.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.01)";
    item.style.color = "goldenrod";
    item.style.transition = "0.2s linear";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
    item.style.color = "black";
  });
})

//  Div generator
const generator = (i, playColor) => {
  const playDiv = document.createElement("div")
  container.append(playDiv)
  playDiv.setAttribute("id", `play${i}`)
  playDiv.style.backgroundColor = playColor
  playDiv.style.position = "static"
  playDiv.style.width = "5rem"
  playDiv.style.height = "5rem"
  playDiv.style.border = "0.1rem solid white"
  playDiv.style.borderRadius = "5px"
  playDiv.style.boxSizing = "border-box"
  playDiv.style.zIndex = "100"
  console.log(playDiv)
}

// div movement and controls -----
let currentControl = null;
let hCurrent = 0;
let vCurrent = 0;

// ----------------play div creator & Interval-------

start.addEventListener("click", (e) => {
  start.setAttribute("disabled", "")
  let i = 1
  let color = Math.floor(Math.random() * 998 + 1)
  generator(i, `#${color}`)
  // console.log(color)
  currentControl = document.querySelector(`#play${i}`);
  hCurrent = 0;
  vCurrent = 0;
  i = i + 1
  const interval = setInterval(() => {
    let color = Math.floor(Math.random() * 998 + 1)
    generator(i, `#${color}`)
    currentControl = document.querySelector(`#play${i}`);
    hCurrent = 0;
    vCurrent = 0;
    i = i + 1
    const resultText = (resultTexts) => {
      const result = document.createElement("Span")
      document.body.append(result)
      result.appendChild(document.createTextNode(resultTexts))
      console.log(result.innerText)
      result.style.position = "fixed";
      result.style.top = "25%";
      // result.style.left = "50%";
      result.style.transform = "translate scale(1.1)";
      result.style.zIndex = "9999";
      result.style.color = "#fff3d9";
      result.style.fontSize = "7rem";
      result.style.fontWeight = "bold";
      result.style.textAlign = "center";
    }
    if (i == 37) {
      clearInterval(interval);
      console.log("Stopped!");
      resultText("You Lost!!")
    }
    stop.addEventListener("click", (e) => {
      clearInterval(interval);
      console.log("Game ended");
      resultText("You Quit!!")

    })


  }, 3000)
})



// -----------------Button's logic----------------
rightBtn.addEventListener("click", (e) => {
  if (!currentControl) return;
  if (hCurrent == 25) {
    console.log("right Invalid")
  } else {
    currentControl.style.position = "absolute"
    hCurrent = hCurrent + 5
    currentControl.style.left = `${hCurrent}rem`;
    console.log(hCurrent)
  }
})

leftBtn.addEventListener("click", (e) => {
  if (!currentControl) return;
  if (hCurrent == 0) {
    console.log("left Invalid")
  } else {
    currentControl.style.position = "absolute"
    hCurrent = hCurrent - 5
    currentControl.style.left = `${hCurrent}rem`;
    console.log("left", hCurrent)
  }
})

downBtn.addEventListener("click", (e) => {
  if (!currentControl) return;
  if (vCurrent == 25) {
    console.log("down Invalid")
  } else {
    currentControl.style.position = "absolute"
    vCurrent = vCurrent + 5
    currentControl.style.top = `${vCurrent}rem`;
    console.log(vCurrent)
  }
})

upBtn.addEventListener("click", (e) => {
  if (!currentControl) return;
  if (vCurrent == 0) {
    console.log("up Invalid")
  } else {
    currentControl.style.position = "absolute"
    vCurrent = vCurrent - 5
    currentControl.style.top = `${vCurrent}rem`;
    console.log(vCurrent)
  }
})

// Designer

const Avishkar = document.querySelector("#Avishkar")
Avishkar.style.position = "absolute";
Avishkar.style.color = "white";
Avishkar.style.bottom = "1rem";
Avishkar.style.right = "1rem";
Avishkar.style.fontSize = "1.3rem";
Avishkar.style.fontWeight = "600";
const surName = document.createTextNode(" Gupta")
Avishkar.appendChild(surName)


Avishkar.addEventListener("mouseover", () => {
  Avishkar.style.transform = "scale(1.01)";
  Avishkar.style.color = "goldenrod";
  Avishkar.style.transition = "0.2s linear";
});
Avishkar.addEventListener("mouseout", () => {
  Avishkar.style.transform = "scale(1)";
  Avishkar.style.color = "white";
});
