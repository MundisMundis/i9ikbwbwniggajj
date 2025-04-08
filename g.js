let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const userGuess = Number(document.getElementById('guess').value);
      const message = document.getElementById('message');

      if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        message.style.color = 'red';
        return;
      }

      attempts++;

      if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right in ${attempts} attempts!`;
        message.style.color = 'green';
      } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'orange';
      } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'orange';
      }
    }

    function restartGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      document.getElementById('guess').value = '';
      document.getElementById('message').textContent = '';
    }