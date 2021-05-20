/*
    N220 
    Hieu Nguyen
    Week 14 assignment
    Rock paper scissors 

*/

//create function main
function main(){
    //create a div that display who won the game
    let finalResultDiv = createItem('div', 100, 20, 500, 150, 'absolute');
    //set text for this div
    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Game on!';
    //set style for the div
    styleDiv(finalResultDiv, 'lightgrey');

    //create varibles holing the value of player and computer scores to keep track of player and computer scores
    //this uses to keep track of how many times each won
    //they both start at 0
    let playerScore = 0;
    let computerScore = 0;

    //create a div to display player score
    let playerScoreDiv = createItem('div', 110, 40, 120, 120, 'absolute');
    //set text for the player score div
    playerScoreDiv.innerHTML = 'Player' + '<br>' + playerScore;
    //set style
    styleDiv(playerScoreDiv, 'lightblue');

    //create a div to display current computer score
    let computerScoreDiv = createItem('div', 110, 380, 120, 120, 'absolute');
    //set text output for this div
    computerScoreDiv.innerHTML = 'Computer' + '<br>' + computerScore;
    //set style for it
    styleDiv(computerScoreDiv, 'lightyellow')


    //create a div to hold 3 button
    let buttonCover = createItem('div', 270, 210, 150, 120, 'absolute')
    //set style 
    styleDiv(buttonCover, 'black');


    //use a for loop to create 3 button, and set custom HTML atribute for each
    for(let b = 1; b < 4; b++){
        let button = createItem('button', b*7, 0, 130, 30, 'relative');
        buttonCover.appendChild(button)
        if(b == 1){
            button.innerHTML = 'Paper';
            button.setAttribute('data-value', 'paper');
        }else if(b == 2){
            button.innerHTML = 'Rock';
            button.setAttribute('data-value', 'rock');
        }else{
            button.innerHTML = 'Scissors';
            button.setAttribute('data-value', 'scissors');
        }
    }

    //create an array of paper, rock, scissors for computer to choose from, there are 3 options. 
    let computerOptions = ['paper', 'rock', 'scissors'];

    // create a for loop to add an event to each button when it is clicked
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', (eventData) => {
            //get data value of the button when it clicked //  let's say human choice
            let playerChoice = eventData.target.getAttribute('data-value');
            
            //get the random value that computer will choose
            //Math.random() will generate a random number between 0 and 1
            //Math.random() * (number) will generate a random number between 0  and number 
            //Math.floor() will return a integer that less than a given number // here givenNumber = Math.random() * number
            let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

            //check the two choices to see who win and increase number of time player or computer win
            //if both choose paper, it's a tie
            if(playerChoice == computerChoice){
                finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'It"s a tie!'; 
            }
            //if player choose paper, computer choose scissors, computer win 
            //if player choose paper, computer choose rock, player win 
            if(playerChoice == 'paper'){
                if(computerChoice == 'rock'){
                    playerScore += 1;
                    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Player won!';
                }else if(computerChoice == 'scissors'){
                    computerScore += 1;
                    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Computer won!';
                }
            //if player choose rock, computer choose scissors, player win 
            //if player choose rock, computer choose paper, computer win 
            }else if(playerChoice == 'rock'){
                if(computerChoice == 'scissors'){
                    playerScore += 1;
                    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Player won!';
                }else if(computerChoice == 'paper'){
                    computerScore += 1;
                    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Computer won!';
                }
            //if player choose scissors, computer choose rock, computer win 
            //if player choose scissors, computer choose paper, player win 
            }else if(playerChoice == 'scissors'){
                if(computerChoice == 'rock'){
                    computerScore += 1;
                    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Computer won!';
                }else if(computerChoice == 'paper'){
                    playerScore += 1;
                    finalResultDiv.innerHTML = 'PaperRockScissors'  + '<br>' + 'Player won!';
                }
            }
            //update what they choose on screen, and the number of time each won
            playerScoreDiv.innerHTML = 'Player' + '<br>' + playerScore + '<br>' + playerChoice;
            computerScoreDiv.innerHTML = 'Computer' + '<br>' + computerScore + '<br>' + computerChoice;
        })
    })
}

//create a function to create HTML elements
function createItem(iType, top, left, width, height, position){
    let item = document.createElement(iType);
    item.style.position = position;
    item.style.top = top + 'px';
    item.style.left = left + 'px';
    item.style.width = width + 'px';
    item.style.height =  height + 'px';
    document.body.appendChild(item);
    return item;
}

//create a function to style the div that take in a div and background as arguments
function styleDiv(div, background){
    div.style.textAlign = 'center';
    div.style.backgroundColor = background; 
} 