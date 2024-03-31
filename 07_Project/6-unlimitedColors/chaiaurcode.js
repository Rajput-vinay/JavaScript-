const body = document.querySelector("body");

const randomNumber = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};
let setTimeInterval;
const changeBackgroundColor = function () {
  if (!setTimeInterval) {
    setTimeInterval = setInterval(changeColor, 1000);
  }

  function changeColor() {
    body.style.backgroundColor = randomNumber();
  }
};

const stopBackgroundColor = function () {
  clearInterval(setTimeInterval);
  setTimeInterval = null;
};

document.querySelector("#start").addEventListener("click", changeBackgroundColor);
document.querySelector("#stop").addEventListener("click", stopBackgroundColor);
