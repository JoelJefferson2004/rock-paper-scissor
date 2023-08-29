// Computer's play 

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissor";
    }
}

// Getting player input, (recursive)

function getPlayerChoice(){
    let choice = prompt('Enter you play: ');
    choice = choice.toLowerCase();
    if(choice == "rock" || choice == "paper" || choice == "scissor"){
        return choice;
    }
    alert("Enter valid options (rock, paper, scissor)");
    return getPlayerChoice(); // 
}

function playRound(computerChoice, playerChoice){
    console.log("computer : " + computerChoice); // logs
    console.log("player: " + playerChoice); // logs
    let options = ["rock", "paper", "scissor"];
    if(computerChoice == playerChoice){
        return "It is a draw!";
    }
    if(options.indexOf(computerChoice) == (options.indexOf(playerChoice) + 1) % 3){
        return "You Lost";
    }
    return "You Won";
}

function game(){
    let computerWins = 0;
    let playerWins = 0;
    for(let i =0 ; i < 5; i ++){
        const result = playRound(getComputerChoice(), getPlayerChoice());
        console.log(result);
        if(result.split(" ")[1] == "Lost"){
            computerWins ++;
        }
        else if(result.split(" ")[1] == "Won"){
            playerWins ++;
        }
        else{
            playerWins ++;
            computerWins ++;
        }
        console.log(`SCORE : Computer : ${computerWins} || Player : ${playerWins}`); //logs
    }
    if(playerWins > computerWins){
        return "You won";
    }
    else if(playerWins == computerWins){
        return "It's draw";
    }
    return "You Lost";
}

console.log(game());