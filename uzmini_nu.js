const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById(uzmini).addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('uzmini').value);
    const messageElement = document.getElementById('message');
    attempts++;

    if (isNaN(userGuess)) {
        messageElement.textContent = 'Please enter a valid number!';
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Your guess must be between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        messageElement.style.color = 'green';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try again.';
        messageElement.style.color = 'blue';
    } else {
        messageElement.textContent = 'Too high! Try again.';
        messageElement.style.color = 'red';
    }
});