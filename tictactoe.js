var gridNum = 3
//userinput for gridNum to expand or drop down list
var counter = 1
var messageBoard = document.querySelector('.messageBoard')
var resetBtn = document.querySelector('.reset')
var ansArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var players = ['X', 'O']
var allDivBox = document.querySelectorAll('div')
var counter2 = 1
// var elem2 = 'https://bit.ly/38CawXZ'
// var elem = document.createElement("img");
//   elem.setAttribute("src", "https://media3.giphy.com/media/xvZOuJeLij0W9IwCdH/giphy.gif?cid=790b7611f7d6f1d8b24b92cbf17ad6945c454e19c22b887d&rid=giphy.gif&ct=g");
//   elem.setAttribute("height", "100");
//   elem.setAttribute("width", "100");
//   elem.setAttribute("alt", "1");
// https://media4.giphy.com/media/3o7WTqRKlVRj0wsYQo/giphy.gif?cid=ecf05e475o9goo8i63ltmgqkm0de9joeyo1nost2d8mlhu6c&rid=giphy.gif&ct=g

function markBox(event) {
    var boxClickedOn = event.target
    console.log(counter)    

    if ((boxClickedOn.tagName === 'DIV') && (ansArr[boxClickedOn.id] === 0)) {
        counter = counter + 1
        if (counter % 2) {
            event.target.textContent = 'X'
            messageBoard.textContent = "Player O's turn"
            ansArr.splice(boxClickedOn.id, 1, 'X')
            if (document.querySelector('.player1Name').textContent !== "Player 1") {
                boxClickedOn.textContent = ''
                var elem = document.createElement("img");
                elem.setAttribute("src", "https://media4.giphy.com/media/3o7WTqRKlVRj0wsYQo/giphy.gif?cid=ecf05e475o9goo8i63ltmgqkm0de9joeyo1nost2d8mlhu6c&rid=giphy.gif&ct=g")
                elem.setAttribute("height", "100")
                elem.setAttribute("width", "100")
                elem.setAttribute("alt", "1")
                boxClickedOn.appendChild(elem)
            }
        } else {
            boxClickedOn.textContent = 'O'
            messageBoard.textContent = "Player X's turn"
            ansArr.splice(boxClickedOn.id, 1, 'O')
            if (document.querySelector('.player2Name').textContent !== "Player 2") {
                boxClickedOn.textContent = ''
                var elem = document.createElement("img");
                elem.setAttribute("src", "https://media3.giphy.com/media/xvZOuJeLij0W9IwCdH/giphy.gif?cid=790b7611f7d6f1d8b24b92cbf17ad6945c454e19c22b887d&rid=giphy.gif&ct=g")
                elem.setAttribute("height", "100")
                elem.setAttribute("width", "100")
                elem.setAttribute("alt", "1")
                boxClickedOn.appendChild(elem)
            }

            }
        } else if (counter === (gridNum*gridNum)+1) {
            counter = counter + 1
            messageBoard.textContent = "TIE"
            ansArr = [1, 1, 1, 1, 1, 1, 1, 1, 1]
            resetBtn.textContent = "Click here to play again"
        } else if (counter === (gridNum*gridNum)+2) {
            counter = counter + 1
            messageBoard.textContent = "Please click the Play Again button to play another game"
        } else if (counter >= (gridNum*gridNum)+3) {
            messageBoard.textContent = "Stop clicking the game is over!!!"
        }

       // winning conditions 
    for (var i = 0; i < players.length; i++) {
        if ((ansArr[0] === players[i]) && (ansArr[1] === players[i]) && (ansArr[2] === players[i]) || (ansArr[3] === players[i]) && (ansArr[4] === players[i]) && (ansArr[5] === players[i]) || (ansArr[6] === players[i]) && (ansArr[7] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[3] === players[i]) && (ansArr[6] === players[i]) || (ansArr[1] === players[i]) && (ansArr[4] === players[i]) && (ansArr[7] === players[i]) || (ansArr[2] === players[i]) && (ansArr[5] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[4] === players[i]) && (ansArr[8] === players[i]) || (ansArr[2] === players[i]) && (ansArr[4] === players[i]) && (ansArr[6] === players[i])) {
            messageBoard.textContent = "Player " + players[i] + " wins"
            counter = (gridNum*gridNum)+2
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






// function theme(event) {
        
//     }
    
// ThemeBtn =
//         document.querySelector('.theme')
//         .addEventListener('click', theme)

// function computerPlayerMove(event) {
    
//     computerMove = Math.floor(Math.random() * (9 - 0))
//     console.log(counter)

    
//     if (ansArr[computerMove] === 0) {
//         counter = counter + 1        
//         if (counter % 2) {
//             allDivBox[computerMove].textContent = 'X'
//             messageBoard.textContent = "Player O's turn"
//             ansArr.splice(allDivBox[computerMove], 1, 'X')
//         } else {
//             allDivBox[computerMove].textContent = 'O'
//             messageBoard.textContent = "Player X's turn"
//             ansArr.splice(allDivBox[computerMove].id, 1, 'O')}
//     }
   
    
// }

// computerPlayerMoveBtn = 
//     document.querySelector('.computerPlayerMove')
//     .addEventListener('click', computerPlayerMove)
