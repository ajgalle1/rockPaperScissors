const choiceRock = document.querySelector("#rockChosen");
const choicePaper = document.querySelector("#paperChosen");
const choiceScissors = document.querySelector("#scissorsChosen");
const computerPlayImg = document.querySelector("#computerChoice");


let playerChoice = "Select";

function choiceMade(e) {
    playerChoice = e.target.alt;

    const computerPlay = Math.floor(Math.random() * 3 - 1 + 1); //Choose a number between 1 and 3
    
    if (computerPlay == 0) {
        computerPlayImg.src = "images/rock90x90.png";
    } else if (computerPlay == 1) {
        computerPlayImg.src = "images/paper90x90.png";
    } else {
        computerPlayImg.src = "images/scissors90x90.png";
    }
    

}

/* Set up an event listener for each picture the player could chose. Then, take the "alt" tag on the image and replace that for the player choice. So, if they click the image of the rock, player choice become rock*/
choiceRock.addEventListener('click', choiceMade);

choicePaper.addEventListener('click', choiceMade);

choiceScissors.addEventListener('click', choiceMade);






