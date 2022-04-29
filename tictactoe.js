var gridNum = 3
//userinput for gridNum to expand or drop down list
var counter = 1
var messageBoard

var ansArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var players = ['X', 'O']

function markBox(event) {
    var boxClickedOn = event.target
    var allDivBox = document.querySelectorAll('div')
    
    counter = counter + 1

    if (boxClickedOn.tagName === 'DIV') {
        if (counter % 2) {
            event.target.textContent = 'X'
            ansArr.splice(event.target.id, 1, 'X')
        } else {
            boxClickedOn.textContent = 'O'
            ansArr.splice(event.target.id, 1, 'O')}

        
    for (var i = 0; i < players.length; i++) {
        if ((ansArr[0] === players[i]) && (ansArr[1] === players[i]) && (ansArr[2] === players[i]) || (ansArr[3] === players[i]) && (ansArr[4] === players[i]) && (ansArr[5] === players[i]) || (ansArr[6] === players[i]) && (ansArr[7] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[3] === players[i]) && (ansArr[6] === players[i]) || (ansArr[1] === players[i]) && (ansArr[4] === players[i]) && (ansArr[7] === players[i]) || (ansArr[2] === players[i]) && (ansArr[5] === players[i]) && (ansArr[8] === players[i]) || (ansArr[0] === players[i]) && (ansArr[4] === players[i]) && (ansArr[8] === players[i]) || (ansArr[2] === players[i]) && (ansArr[4] === players[i]) && (ansArr[6] === players[i])) {
            console.log( players[i] + " wins")
        }
    }
    
if (counter === 10) {
    console.log("tie")
}

}
}

document
    .querySelector('.gameBoard')
    .addEventListener('click', markBox)
