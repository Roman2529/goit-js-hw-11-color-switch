const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalRef 

const switchColor = () => {
    let color = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.bgColor = colors[color];
};

const startBtn = () => {
    refs.btnStart.disabled = true;
    intervalRef = setInterval(switchColor, 1000);
}

const stopBtn = () => {
    clearInterval(intervalRef);
    refs.btnStop.disabled = false;
}

refs.btnStart.addEventListener("click", startBtn);
refs.btnStop.addEventListener("click", stopBtn);