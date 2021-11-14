const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const winningScore_span = document.getElementById('winning-score');
const input_input = document.querySelector('.input');
const resetBtn = document.getElementById('reset-btn');
const result_h1 = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
let gameState = true;
let userScore = 0;
let computerScore = 0;
let winningScore = 10;

result_h1.textContent = 'Let the round begin!';


input_input.addEventListener('keypress',(e) =>{
    if(e.which === 13) {
        reset();
        winningScore_span.textContent = input_input.value;
        winningScore = Number(input_input.value);
        input_input.value = '';
    }
    
});

resetBtn.addEventListener('click', reset);

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    result_h1.textContent = 'Let the round begin!';
    gameState = true;
}

function randomComputerChoice() {
    let computerArr = ['rock', 'paper', 'scissors'];
    let randomCompChoice = Math.floor(Math.random() * 3);
    return computerArr[randomCompChoice];
}

function capitalizeWords(text) {
    if (text === 'rock') return 'Rock';
    if (text === 'paper') return 'Paper';
    if (text === 'scissors') return 'Scissors';

}

function win(user, comp) {
    if (gameState === true) {
        userScore++;
        userScore_span.textContent = userScore;
        result_h1.textContent = `${capitalizeWords(user)} beats ${capitalizeWords(comp)}. You win this round!`
        if (userScore === winningScore) {
            result_h1.textContent = 'You won the game!'
            gameState = false;
        }
    }
};

function lost(user, comp) {
    if (gameState === true) {
        computerScore++;
        computerScore_span.textContent = computerScore;
        result_h1.textContent = `${capitalizeWords(user)} loses to ${capitalizeWords(comp)}. You lost this round!`
        if (computerScore === winningScore) {
            result_h1.textContent = 'You lost the game, sucker!'
            gameState = false;
        }
    }
};

function draw(user, comp) {
    if(gameState === true) {
        result_h1.textContent = `${capitalizeWords(user)} is even to ${capitalizeWords(comp)}. Round ends in a draw!`
    }
    
};

function game(user) {
    let comp = randomComputerChoice();
    switch (user + comp) {
        case 'rock' + 'scissors':
        case 'paper' + 'rock':
        case 'scissors' + 'paper':
            win(user, comp);
            break;

        case 'scissors' + 'rock':
        case 'rock' + 'paper':
        case 'paper' + 'scissors':
            lost(user, comp);
            break;

        case 'scissors' + 'scissors':
        case 'paper' + 'paper':
        case 'rock' + 'rock':
            draw(user, comp);
            break;
    };
};

rock_div.addEventListener('click', () => {
    game('rock');
});

paper_div.addEventListener('click', () => {
    game('paper');
});
scissors_div.addEventListener('click', () => {
    game('scissors');
});