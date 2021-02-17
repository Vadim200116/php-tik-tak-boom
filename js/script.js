
// обработчик кнопки начало
let gameRun=document.getElementById('gameRun');
    gameRun.addEventListener('click',function () {
    tikTakBoom.startTimer();
})

// обработчик кнопки конец
let gameFinish=document.getElementById('gameFinish');
gameFinish.addEventListener('click',function() {
    tikTakBoom.finish('lose');
    
})
let startBlock=document.getElementById('startBlock');
let inGameBlock=document.getElementById('inGameBlock');


window.onload = function()
{
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('inputTime'),   
        document.getElementById('inputCountOfPlayers'),
    )

}
