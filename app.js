let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw.");
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
 
    if(userChoice=== compChoice){
        // draw Game
        drawGame();
    } else{
        let userwin = true;
        if (userChoice=== "rock"){
            userwin = compChoice=== "paper"? false:true;
    } else if (userChoice=== "paper") {
userwin = compChoice === "scissors" ? false:true;

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",choiceId);
        playGame(userChoice);
    });    
});

