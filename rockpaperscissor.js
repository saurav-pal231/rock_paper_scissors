let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("computer-score");


const gameDraw = () => {
    console.log("its a tie!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "black";
};
const generateComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log ("User wins!");
        msg.innerText = `You win! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log ("Computer wins!");
        msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //console.log ("user choice =", userChoice);
    const compChoice = generateComputerChoice();
    //console.log("computer choice =", compChoice);

    if (userChoice === compChoice){
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log (userChoice, "Choice was clicked");
        playGame(userChoice);
    });
});