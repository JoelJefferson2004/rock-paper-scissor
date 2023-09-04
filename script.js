function getImage(option){
    switch(option){
        case "rock":{
            let rockImage = document.createElement("img");
            rockImage.setAttribute("src", "images/rock.png");
            return rockImage;
        }
        case "paper":{
            let paperImage = document.createElement("img");
            paperImage.setAttribute("src", "images/paper.png");
            return paperImage;
        }
        case "scissor":{
            let scissorImage = document.createElement("img");
            scissorImage.setAttribute("src", "images/scissors.png");
            return scissorImage;
        }
    }
}

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissor";
    }
}

function tagEventListener(){
    let images = document.querySelectorAll(".container img");
    images.forEach((image) => image.addEventListener("click", playRound));
}

function untagEvenListener(){
    let images = document.querySelectorAll(".container img");
    images.forEach((image) => image.removeEventListener("click", playRound));
}

let gameCount = 0;
let computerWins = 0;
let playerWins = 0;
let restart = false;
function playRound(event){
    gameCount += 1;
    const playerChoice = event.target.id.slice(1, event.target.id.length);
    const computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);
    setImage(computerChoice, playerChoice);
    setMessage(computerChoice, playerChoice);
    setScore();
    if(restart){
        executeRestart();
    }
}

function executeRestart(){
    let messageElement = document.querySelector('.results .message');
    if(playerWins == computerWins){
        messageElement.textContent = "You drew the game! Refresh to restart!";
    }
    else if(playerWins > computerWins){
        messageElement.textContent = "You won the game! Refresh to restart!";
    }
    else{
        messageElement.textContent = "You lost the game! Refresh to restart!";
    }
    untagEvenListener();
}

function setImage(computerChoice, playerChoice){
    const computerImage = getImage(computerChoice);
    const playerImage = getImage(playerChoice);
    const playerParent = document.querySelector(".player .choice");
    const computerParent = document.querySelector(".computer .choice");
    if(gameCount > 1){
        playerParent.removeChild(document.querySelector(".player img"));
        computerParent.removeChild(document.querySelector(".computer img"));
    }
    playerParent.appendChild(playerImage);
    computerParent.appendChild(computerImage);
}

function setMessage(computerChoice, playerChoice){
    const message = getResult(computerChoice, playerChoice);
    if(gameCount == 5){
        restart = true;
    }
    let messageElement = document.querySelector('.results .message');
    messageElement.textContent = message;
}
function setScore(){
    let playerScore = document.querySelector(".player .score");
    let computerScore = document.querySelector(".computer .score");
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}


function getResult(computerChoice, playerChoice){
    console.log("computer : " + computerChoice); // logs
    console.log("player: " + playerChoice); // logs
    let options = ["rock", "paper", "scissor"];
    if(computerChoice == playerChoice){
        playerWins ++;
        computerWins ++;
        return "It is a draw!";
    }

    if(options.indexOf(computerChoice) == (options.indexOf(playerChoice) + 1) % 3){
        computerWins ++;
        return "You Lost";
    }
    playerWins ++;
    return "You Won";
}


function main(){
    tagEventListener();
}

main();