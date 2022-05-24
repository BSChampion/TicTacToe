# TicTacToe
<a href='https://bvaneerden.github.io/TicTacToe/'>Click here to play the game</a>
## Summary of Project


## Plan
9 box's with abilty to expand by using var gridNum
Change player turn managed by var counter % 2 - completed
class's to change on click - too long
answer array - shorter - completed
stop double clicking on boxes - completed
stop game after win - completed
class's to change on .addEventListener('click' function)
boxedClickedOn.textcontent = X or O (if loop) (could use image once its working)


## Cool tech you used (or code you're proud of)


## Lessons you learnt

##Expanding ideas
reset button (would you like to play again) - Completed
new round - new game
Names of Players - completed
Computer Player
Score card - best to 5
theme
insert concepts learnt in the course that have not yet been used

X vs O which player is which?
confirm basic details before writing getting too involved

learnt that although the testing and made this look like it worked... logged both winning
for (var i = 0; i < players.length; i++) {
    if ((ansArr[0] && ansArr[1] && ansArr[2] === players[i] ) || 
        (ansArr[3] && ansArr[4] && ansArr[5] === players[i] ) || 
        (ansArr[6] && ansArr[7] && ansArr[8] === players[i] ) || 
        (ansArr[0] && ansArr[3] && ansArr[6] === players[i] ) || 
        (ansArr[1] && ansArr[4] && ansArr[7] === players[i] ) || 
        (ansArr[2] && ansArr[5] && ansArr[8] === players[i] ) || 
        (ansArr[0] && ansArr[4] && ansArr[8] === players[i] ) || 
        (ansArr[2] && ansArr[4] && ansArr[6] === players[i] )) {
        console.log( ansArr + players[i] + " wins")
    }
}
