const counter = document.querySelector(".counter");
const btnInc = document.querySelector(".btn-inc");
const btnDec = document.querySelector(".btn-dec");
const btnClr = document.querySelector(".btn-clr");
const number = document.querySelector(".number");

let countNum = 0;

const updateCounter = (n) => {
  if (countNum + n < 0) {
    return;
  }
  countNum += n;
  number.textContent = countNum;
};

btnInc.addEventListener("click", () => updateCounter(1));
btnDec.addEventListener("click", () => updateCounter(-1));
btnClr.addEventListener("click", () => updateCounter(-countNum));


// let num = 0;

// pgUp = () => {
//     num += 1
//     onCounter()
// }

// pgDown = () => {

//     if (num > 0) {
//         num -= 1
//     }

//     onCounter()
// }

// pgCls = () => {

//     num = 0
//     onCounter()
// }

// const onCounter = () => {

//     result.innerText = num;
// }

// const result = document.getElementById("num");
