function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoise(){
    let bot = getRandomInt(3);
    if(bot == 0){
        return 'paper';
    }else if(bot == 1){
        return 'rock';
    }else{
        return 'scisor';
    }
}