const X_Class = 'x'
const O_Class = 'o'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageText = document.querySelector('[winning-message-text]')
let oTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    oTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_Class)
        cell.classList.remove(O_Class)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? O_Class : X_Class
    putXO(cell, currentClass)
    if (checkForWin(currentClass)) {    // Check for Win
        endGame(false)
    } else if (isDraw()) {             // Check for Draw
        endGame(true)
    } else {                          // Switch Turns
        switchTurns()
        setBoardHoverClass()
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = 'Draw!'
    } else {
        winningMessageText.innerText = `${oTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_Class) ||
        cell.classList.contains(O_Class)
    })
}

function putXO(cell, currentClass) {
    cell.classList.add(currentClass)
}

function switchTurns() {
    oTurn = !oTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_Class)
    board.classList.remove(O_Class)
    if (oTurn) {
        board.classList.add(O_Class)
    } else {
        board.classList.add(X_Class)
    }
}

function checkForWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}