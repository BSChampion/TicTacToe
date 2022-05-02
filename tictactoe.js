var gridNum = 3
//userinput for gridNum to expand or drop down list
var counter = 1
var messageBoard = document.querySelector('.messageBoard')
var resetBtn = document.querySelector('.reset')
var ansArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var players = ['X', 'O']
var allDivBox = document.querySelectorAll('div')

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
            if (players[i] === 'X') {
                document.querySelector('p.playerXScore').textContent = Number(document.querySelector('p.playerXScore').textContent)+1
            } else {
                document.querySelector('p.playerOScore').textContent = Number(document.querySelector('p.playerOScore').textContent)+1
            }
        }
    }
    }

}

document
    .querySelector('.gameBoard')
    .addEventListener('click', markBox)

function reset(event) {
    ansArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    counter = 1
    resetBtn.textContent = "Reset"

    for (i = 0; i < allDivBox.length; i++) {
        allDivBox[i].textContent = ''
    }
} 

resetBtn
    .addEventListener('click', reset)



function customise(event) {
    document.querySelector('.player1Name').textContent = prompt("Please enter the name for player 1")
    document.querySelector('.player2Name').textContent = prompt("Please enter the name for player 2")
}

customiseBtn =
    document.querySelector('.customise')
    .addEventListener('click', customise)

function computerPlayerMove(event) {
    counter = counter + 1
    computerMove = Math.floor(Math.random() * (9 - 0))
    console.log(counter)

    
    if (ansArr[computerMove] === 0) {        
        if (counter % 2) {
            allDivBox[computerMove].textContent = 'X'
            messageBoard.textContent = "Player O's turn"
            ansArr.splice(allDivBox[computerMove], 1, 'X')
        } else {
            allDivBox[computerMove].textContent = 'O'
            messageBoard.textContent = "Player X's turn"
            ansArr.splice(allDivBox[computerMove].id, 1, 'O')}
    }
   
    
}

computerPlayerMoveBtn = 
    document.querySelector('.computerPlayerMove')
    .addEventListener('click', computerPlayerMove)

// var winningConditions = [012, 345, 678, 036, 147, 258, 048, 246]

// for (var i = 0; i < winningConditions.length; i++) {
//     if ((ansArr[winningConditions[i][0]] === players[i]) && (ansArr[winningConditions[i][0]] === players[i]) && (ansArr[2] === players[i])
// }

// } else if ((ansArr[0] === players[i]) && (ansArr[1] === players[i]) && (ansArr[2] === players[i]) || (ansArr[3] === players[i]) && (ansArr[4] === players[i]) && (ansArr[5] === players[i]) || (ansArr[6] === players[i]) && (ansArr[7] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[3] === players[i]) && (ansArr[6] === players[i]) || (ansArr[1] === players[i]) && (ansArr[4] === players[i]) && (ansArr[7] === players[i]) || (ansArr[2] === players[i]) && (ansArr[5] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[4] === players[i]) && (ansArr[8] === players[i]) || (ansArr[2] === players[i]) && (ansArr[4] === players[i]) && (ansArr[6] === players[i])) {