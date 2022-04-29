var gridNum = 3
//userinput for gridNum to expand or drop down list
var counter = 1

var ansArr = ['O', 'X', 'X', 0, 'O', 0, 0, 0, 'O']
var players = ['X', 'O']

for (var i = 0; i < players.length; i++) {
    if ((ansArr[0] && ansArr[1] && ansArr[2] === players[i] ) || 
        (ansArr[3] && ansArr[4] && ansArr[5] === players[i] ) || 
        (ansArr[6] && ansArr[7] && ansArr[8] === players[i] ) || 
        (ansArr[0] && ansArr[3] && ansArr[6] === players[i] ) || 
        (ansArr[1] && ansArr[4] && ansArr[7] === players[i] ) || 
        (ansArr[2] && ansArr[5] && ansArr[8] === players[i] ) || 
        (ansArr[0] && ansArr[4] && ansArr[8] === players[i] ) || 
        (ansArr[2] && ansArr[4] && ansArr[6] === players[i] )) {
        console.log(players[i] + " wins")
    }
}

if (counter === 10) {
    console.log("tie")
}

function markBox(event) {
    var boxClickedOn = event.target
    var allDivBox = document.querySelectorAll('div')
    
    counter = counter + 1

    if (boxClickedOn.tagName === 'DIV') {
        if (counter % 2) {
            event.target.textContent = 'X'
        } else {boxClickedOn.textContent = 'O'}

        if (Number(event.target.id) <= gridNum) {
            boxClickedOn.classList.toggle('r1')
        } else if (Number(event.target.id) <= (gridNum * 2)) {
            boxClickedOn.classList.toggle('r2')
        } else {
            boxClickedOn.classList.toggle('r3')
        }
        if ((Number(event.target.id) % gridNum) === 1) {
            boxClickedOn.classList.toggle('c1')
        } else if ((Number(event.target.id) % gridNum) === 2) {
            boxClickedOn.classList.toggle('c2')
        } else  {
            boxClickedOn.classList.toggle('c3')
        }
        
        if (Number(event.target.id) === 1 || Number(event.target.id) === 5 || Number(event.target.id) === 9)  {
            boxClickedOn.classList.toggle('d1')
        }
        if (Number(event.target.id) === 3 || Number(event.target.id) === 5 || Number(event.target.id) === 7) {
            boxClickedOn.classList.toggle('d2')
        }
   
    var row1 = document.querySelectorAll('div.r1')
    var row2 = document.querySelectorAll('div.r2')
    var row3 = document.querySelectorAll('div.r3')
    var column1 = document.querySelectorAll('div.c1')
    var column2 = document.querySelectorAll('div.c2')
    var column3 = document.querySelectorAll('div.c3')
    var diag1 = document.querySelectorAll('div.d1')
    var diag2 = document.querySelectorAll('div.d2')

    // console.log(row1)
    

    // var winningConditions = [row1, row2, row3, column1, column2, column3, diag1, diag2]
    // console.log(winningConditions)
    // for (var i = 0; i < winningConditions.length; i++) {
    //     if (winningConditions[i].length === gridNum) {
    //         for (var j = 0; j < winningConditions[i].length; i++) {if (winningConditions[i][j].textContent === 'O') {
    //             win = win + 1
    //                 console.log(win)
    //                 console.log(winningConditions[i].length)
        //         }
                
        //     }
        // }
    // }
}
}

document
    .querySelector('.gameboard')
    .addEventListener('click', markBox)


    // if clicked on < gridnum3 name r1
    // if < gridnum*2 name r2
    // if < gridnum*3 name r3

    // if clicked on < % gridNum 