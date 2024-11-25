document.getElementById('actionButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('message').textContent = `You entered: ${userInput}`;
  });
  