
//MY CODE: Kristian Del-Rio
/* // START FUNCTION setUpGame
function setUpGame () {
  
  // Start up Game Headline "Choose an Option"
  let winnerHeading = 'Choose an Option';
  const winner = document.querySelector(".winner");
  winner.textContent = winnerHeading;
  
  //default value for player scores at start of game
  let pScore = 0;
  let cScore = 0;

  //Text elements at startup used to add value of 0
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  //Starting position of Hand Images at Game Match Start
  const options = document.querySelectorAll(".options button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  //Starting actions waiting for Lets Play Button listener 
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".match");  
  introScreen.classList.add("fadeOut");
  match.classList.add("fadeIn");
} // END SetUpGame



// START Function GAME
function game(){
  const playBtn = document.querySelector(".intro button");

  //Computer Options Array of options
const computerOptions = ["rock", "paper", "scissors"];

//LISTENER: Let's Play Button Listener to Fade in to Game Match Screen
playBtn.addEventListener("click",setUpGame); // END Let's Play Button Listener  

// LISTENER: For Options Clicked i.e. paper, scissors, rocks)
options.forEach(option => {
  option.addEventListener("click", playGame); //END Listener for Computer Options
  }); //END Foreach loop for computer options listener    

// LISTENER: Hands listener for click to Action
hands.forEach(hand => {
  hand.addEventListener("animationend", function() {
    this.style.animation = "";
  }); //END Actual Hand Listener
}); //END HANDS ForEach Hand loop

// LISTENER RESTART BUTTON
const restartBtn = document.getElementById("restartBtn");
 restartBtn.addEventListener('click', setUpGame);
} // END GAME FUNCTION




//Play Game Function for inputs and Comparing players for winner results
function playGame(){
  //Computer Choice
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];

    setTimeout(() => {
        //Here is where we call compare hands
        compareHands(this.textContent, computerChoice);
        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
    }, 2000); // END SetTImeOut Function

    //Animation
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";
    
    //FUnctions used for Game Logic to determine whose the Winner
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;    
    }; //END updateScore function
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }       
    };  //END compareHands FUnction
    
} //END playGame function




//Call game function to begin The whole game
game();
 */





// ORIGINAL AUTHOR'S JS CODE

  const game = () => {
  // Set score to default
  let pScore = 0;
  let cScore = 0;

  
  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });         
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;    
  }; //END updateScore function

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }       
  };  //END compareHands FUnction

      //Is call all the inner function
      startGame();
      playMatch();
  
}; 

        
//start the game function
game();


// Restart Button Action code: by Kristian W. Del-Rio
// LISTENER RESTART BUTTON
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener('click', gameRestart);

function gameRestart() {

  // Set Game Heading to Default Choose an Option
  let winnerHeading = 'Choose an Option';
  const winner = document.querySelector(".winner");
  winner.textContent = winnerHeading;
  
  //default value for player scores at start of game
  let pScore = 0;
  let cScore = 0;

  //Text elements at startup used to add value of 0
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

  //RESET Hands to Starting Rock Position (original image)
  const computerHand = document.querySelector(".computer-hand");
  const playerHand = document.querySelector(".player-hand");
  computerHand.src = `./assets/rock.png`;
  playerHand.src = `./assets/rock.png`;  
  
} // END FUNCTIOn gameResstart


