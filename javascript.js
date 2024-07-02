function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let bot = getRandomInt(3);
    if(bot == 0){
        return 'paper';
    }else if(bot == 1){
        return 'rock';
    }else{
        return 'scissor';
    }
}

function getHumanChoice(){
    let choice = prompt('Choose your move (rock/paper/scissor)');
    return choice.toLowerCase();
}
let human = 0;
let robot = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice=='paper' && computerChoice =='rock'){
        human++;
    }else if(humanChoice=='paper' && computerChoice=='scissor'){
        robot++;
    }else if(humanChoice=='rock' && computerChoice=='paper'){
        robot++;
    }else if(humanChoice=='rock' && computerChoice=='scissor'){
        human++;
    }else if(humanChoice=='scissor' && computerChoice=='paper'){
        human++;
    }else if(humanChoice=='scissor' && computerChoice=='rock'){
        robot++;
    }

}

function playgame(){
    for (let i = 0; i < 5; i++){
        let person=getHumanChoice();
        let game=getComputerChoice();
        playRound(person,game);
    }
    if(robot>human){
       console.log('Computer wins, score:' + robot);
    }else if(robot<human){
      console.log('You win: score:' + human);
    }else{
        console.log('Tie');
    }
}

playgame();
