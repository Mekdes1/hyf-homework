
const inputIs = document.getElementById("input");
const start = document.getElementById("startButton");
const pressIs = document.getElementById("press");
const resultIs = document.getElementById('result');
const restart = document.getElementById('reload');

let playerL = 0;

let playerS = 0;

function winer() {
    if(!inputIs.value){
        resultIs.innerHTML = ` please set timer`;
    }

    else if( playerS === playerL) {
        resultIs.innerHTML = `Its a tie! play again`;
    }
   else  if (playerS > playerL){
    
  resultIs.innerHTML = `  player L:${playerL} player S: ${playerS}  Player S won!`;
  
  
} else 

    resultIs.innerHTML = `  player L :${playerL} player S : ${playerS}  Player L won! `;
    
}

   pressIs.addEventListener("keypress", () => {
    if (event.key === "l") {
      playerL++;
    } else if (event.key === "s") {
      playerS++;
    } 


  }); // Keep a counter 

const startTime = () => {
    setTimeout( winer, inputIs.value * 1000); // Set a timeout for the time specified by the user and run function 
  };
  
  
  start.addEventListener('click',startTime);
  
  const reloadFunc = () => location.reload(); //  restart a game.
  
  reload.addEventListener('click',reloadFunc);

   
 

  

=======
const inputIs = document.getElementById("input");
const start = document.getElementById("startButton");
const pressIs = document.getElementById("press");
const resultIs = document.getElementById('result');
const restart = document.getElementById('reload');

let playerL = 0;

let playerS = 0;

function winer() {
    if(!inputIs.value){
        resultIs.innerHTML = ` please set timer`;
    }

    else if( playerS === playerL) {
        resultIs.innerHTML = `Its a tie! play again`;
    }
   else  if (playerS > playerL){
  resultIs.innerHTML = `  player L:${playerL} player S: ${playerS}  Player S won!`;
} else 

    resultIs.innerHTML = `  player L :${playerL} player S : ${playerS}  Player L won! `;
}

   pressIs.addEventListener("keypress", () => {
    if (event.key === "l") {
      playerL++;
    } else if (event.key === "s") {
      playerS++;
    } 


  }); // Keep a counter 

const startTime = () => {
    setTimeout( winer, inputIs.value * 1000); // Set a timeout for the time specified by the user and run function 
  };
  
  
  start.addEventListener('click',startTime);
  
  const reloadFunc = () => location.reload(); //  restart a game.
  
  reload.addEventListener('click',reloadFunc);

   
 

  


