const choiceRock = document.querySelector("#rockChosen");
const choicePaper = document.querySelector("#paperChosen");
const choiceScissors = document.querySelector("#scissorsChosen");
const computerPlayImg = document.querySelector("#computerChoice");
const messageText = document.querySelector("#messageText");

let playerChoice = "Select";
//TODO: Get the DID I WIN logic working
function didIWin(computerPlay) {
    if (computerPlay == playerChoice) {
        messageText.textContent = "It is a tie!";
    }

    else if (computerPlay == "rock" && playerChoice != "paper") {
        messageText.textContent = `Computer wins! Computer chose ${computerPlay} and you chose ${playerChoice}`;
    }
    else if (computerPlay == "paper" && playerChoice != "scissors") {
        messageText.textContent = `Computer wins! Computer chose ${computerPlay} and you chose ${playerChoice}`;
    }
    else if (computerPlay == "scissors" && playerChoice != "rock") {
        messageText.textContent = `Computer wins! Computer chose ${computerPlay} and you chose ${playerChoice}`;
    } else {
        messageText.textContent = `You won! Computer chose ${computerPlay} and you chose ${playerChoice}`;
    }
}
function choiceMade(e) {

    playerChoice = e.target.alt;

    let computerPlay = Math.floor(Math.random() * 3 - 1 + 1); //Choose a number between 1 and 3
    
    if (computerPlay == 0) {
        computerPlayImg.src = "images/rock90x90.png";
        computerPlay = "rock";
        didIWin(computerPlay);
    } else if (computerPlay == 1) {
        computerPlayImg.src = "images/paper90x90.png";
        computerPlay = "paper";
        didIWin(computerPlay);
    } else {
        computerPlayImg.src = "images/scissors90x90.png";
        computerPlay = "scissors";
        didIWin(computerPlay);
    }

       

}

/* Set up an event listener for each picture the player could chose. Then, take the "alt" tag on the image and replace that for the player choice. So, if they click the image of the rock, player choice become rock*/
choiceRock.addEventListener('click', choiceMade);

choicePaper.addEventListener('click', choiceMade);

choiceScissors.addEventListener('click', choiceMade);






