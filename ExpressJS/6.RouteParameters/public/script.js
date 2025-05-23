const boxes = document.querySelectorAll('.box')

const boxArr = Array.from(boxes)

let turn = 'X'
let isGameOver = false
const playButton = document.querySelector('#play-again')
const result = document.querySelector('.result') 
const sound = {
    victory : new Audio('victory.mp3')
}

function stopMusic(){
    Object.values(sound).forEach((music) =>{
        music.pause()
        music.currentTime = 0
    })
}

if(!isGameOver){
    boxArr.forEach((box) => {
        stopMusic()
        box.innerHTML = ""
        result.style.display = "none"
        playButton.style.display = "none"
        box.addEventListener('click', function(){
            if(!isGameOver && box.innerHTML == ''){
                box.innerHTML = turn
                checkWin()
                checkDraw()
                changeTurn()
            }
        })
    })
    
    function checkWin(){
        let winCondition = [
            [0,1,2], [3,4,5], [6,7,8],[0,3,6], 
            [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        for(let i = 0; i < winCondition.length; i++){
            let box1 = boxArr[winCondition[i][0]].innerHTML
            let box2 = boxArr[winCondition[i][1]].innerHTML
            let box3 = boxArr[winCondition[i][2]].innerHTML
            if(box1 !== '' && box1 === box2 && box1 === box3){
                sound.victory.play()
                isGameOver = true
                result.innerHTML = turn + " Win"
                result.style.display = "block"
                playButton.style.display = "block"
                for(let j = 0; j < 3; j++){
                    boxArr[winCondition[i][j]].style.backgroundColor = "#08D9D6"
                }
            }
        }
    }
    
    function checkDraw(){
        if(!isGameOver){
            let isDraw = true
            boxArr.forEach(function(box){
                if(box.innerHTML === ""){
                    isDraw = false
                }
            })

            if(isDraw){
                result.innerHTML = "Game Draw"
                result.style.display = "block"
                playButton.style.display = "block"
            }
        }
    }
    
    function changeTurn(){
        if(turn === 'X'){
            turn = 'O'
            document.querySelector('.bg').style.left = '75px'
        }
        else{
            turn = 'X'
            document.querySelector('.bg').style.left = '0'
        }
    }
}
playButton.addEventListener('click', (e) => {
    turn = 'X'
    isGameOver = false
    document.querySelector('.bg').style.left = '0'
    result.style.display = "none"
    playButton.style.display = "none"
    boxArr.forEach((box) => {
        box.innerHTML = ""
        box.style.removeProperty("background-color") //it will remove javascript applied css property
    })
})
