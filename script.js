let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const getAbsoluteDistance = (guess, target) => {
    return Math.abs(target - guess);
}

const checkUserInput = (humanGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please input a number between 0 and 9!');
    }
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    checkUserInput(humanGuess);
    const humanDistance = getAbsoluteDistance(humanGuess,targetNumber);
    const computerDistance = getAbsoluteDistance(computerGuess,targetNumber);
    if (humanDistance <= computerDistance) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;

        case 'computer':
            computerScore += 1;
            break;

        default:
            return 'Wrong input';
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}