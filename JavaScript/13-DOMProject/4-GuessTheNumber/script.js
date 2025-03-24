const min = 1
const max = 100
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

const userInput = document.querySelector("#guessField")
const button = document.querySelector("#subt")
const prevGuess = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const finalRes = document.querySelector(".resultParas")

let guessArr = []
let guessNo = 0;
let play = true
const p = document.createElement("p")

if(play){
  button.addEventListener('click', function(e){
    e.preventDefault()
    const num = Number(userInput.value);
    validateNo(num);
  })
}
function validateNo(num){
  if(isNaN(num)){
    alert(`Enter a valid Number (${num})`)
  }
  if(num < 1){
    alert("Enter number greater than 0")
  }
  if(num > 100){
    alert("Enter number less than 100")
  }
  else{
    guessArr.push(num)
    updateParameter(num)
    checkGuess(num)
  }
}
function checkGuess(num){
  //check
  if(num === randomNumber){
    displayMessage(`Congratulation...You predicted Random number`)
    end()
  }
  else if(num > randomNumber){
    displayMessage("Number is too large")
  }
  else{
    displayMessage("Number is too small")
  }
}

function updateParameter(num){
  if(guessArr.length <= 10){
    //updateParameters
    prevGuess.innerHTML += `${num}, `
    guessNo++;
    remaining.innerHTML = `${10 - guessNo}`
    userInput.value = ''
  }
  else{
    displayMessage("Game Over")
    end()
  }
}
function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
  finalRes.append(lowOrHigh)
}
function end(){
  userInput.value = ''
  userInput.setAttribute('disabled', '');
  p.setAttribute('class','button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  finalRes.append(p)
  play = false;
  start();
}
function start(){
  const startButton = document.querySelector("#newGame")
  startButton.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    guessArr = []
    guessNo = 0;
    prevGuess.innerHTML = ''
    remaining.innerHTML = '10'
    userInput.removeAttribute('disabled')
    finalRes.removeChild(p)
    play = true;
  })
}