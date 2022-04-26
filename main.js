const player1 = document.querySelector('.player-1')
const player2 = document.querySelector('.player-2') 
const player1Btn = document.querySelector('.player-1_btn')
const player2Btn = document.querySelector('.player-2_btn')
const gameLevelEl = document.querySelector('#game-level')
const resetBtn = document.querySelector('.reset')

let playerScore1 = 0
let playerScore2 = 0
let gameLevel = 3
let gameOver = false

player1Btn.addEventListener('click', ()=> {
    if(!gameOver) {
        playerScore1++
        if(playerScore1 >= gameLevel) {
            gameOver = true
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
    }
    player1.textContent = playerScore1
})

player2Btn.addEventListener('click', ()=> {
    if(!gameOver) {
        playerScore2++
        if(playerScore2 >= gameLevel) {
            gameOver = true
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
    }
    player2.textContent = playerScore2
})

gameLevelEl.addEventListener('change', () => {
    gameLevel = +gameLevelEl.value
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
    playerScore1 = 0
    playerScore2 = 0
    player1.textContent = 0
    player2.textContent = 0
    player1.style.color = 'rgb(59, 58, 58)'
    player2.style.color = 'rgb(59, 58, 58)'
    gameOver = false
}