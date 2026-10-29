const readline = require('readline-sync');

function getNumber(question) {
    while (true) {
        const input = readline.question(question);
        if (input.trim() === '') {
            console.log('Invalid input. Please enter a number.');
            continue;
        } const number = Number(input);
        if (!Number.isFinite(number)) {
            console.log('Invalid input. Please enter a valid number.');
            continue;
        } return number;
    }
}

const firstNumber = getNumber('Enter first number: ');
const secondNumber = getNumber('Enter second number: ');

const userAnswer = getNumber(`What is ${firstNumber} + ${secondNumber} ? `);
const sum = firstNumber + secondNumber;
const isCorrect = userAnswer === sum;

console.log(`${firstNumber} + ${secondNumber} = ${userAnswer} is ${isCorrect}`);