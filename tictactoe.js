var gridNum = 3
//userinput for gridNum to expand or drop down list
var counter = 1
var messageBoard = document.querySelector('.messageBoard')
var resetBtn = document.querySelector('.reset')
var ansArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var players = ['X', 'O']

function markBox(event) {
    var boxClickedOn = event.target
    console.log(counter)

    if ((boxClickedOn.tagName === 'DIV') && (ansArr[boxClickedOn.id] === 0)) {
        counter = counter + 1
        if (counter % 2) {
            event.target.textContent = 'X'
            messageBoard.textContent = "Player O's turn"
            ansArr.splice(boxClickedOn.id, 1, 'X')
        } else {
            boxClickedOn.textContent = 'O'
            messageBoard.textContent = "Player X's turn"
            ansArr.splice(boxClickedOn.id, 1, 'O')}
       // winning conditions 
    for (var i = 0; i < players.length; i++) {
        if (counter === (gridNum*gridNum)+1) {
            messageBoard.textContent = "TIE"
            resetBtn.textContent = "Click here to play again"

        } else if ((ansArr[0] === players[i]) && (ansArr[1] === players[i]) && (ansArr[2] === players[i]) || (ansArr[3] === players[i]) && (ansArr[4] === players[i]) && (ansArr[5] === players[i]) || (ansArr[6] === players[i]) && (ansArr[7] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[3] === players[i]) && (ansArr[6] === players[i]) || (ansArr[1] === players[i]) && (ansArr[4] === players[i]) && (ansArr[7] === players[i]) || (ansArr[2] === players[i]) && (ansArr[5] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[4] === players[i]) && (ansArr[8] === players[i]) || (ansArr[2] === players[i]) && (ansArr[4] === players[i]) && (ansArr[6] === players[i])) {
            messageBoard.textContent = "Player " + players[i] + " wins"
            resetBtn.textContent = "Click here to play again"
            ansArr = [1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
    }
    }

}

document
    .querySelector('.gameBoard')
    .addEventListener('click', markBox)

function reset(event) {
    var allDivBox = document.querySelectorAll('div')

    ansArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    counter = 1
    resetBtn.textContent = "Reset"

    for (i = 0; i < allDivBox.length; i++) {
        allDivBox[i].textContent = ''
    }
} 

resetBtn
    .addEventListener('click', reset)

