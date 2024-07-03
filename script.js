  let counter = 0;
        let highScore = 0;
        let history = [];
        let interval;
        let restartTimeout;
        
        const counterElement = document.getElementById('counter');
        const highScoreElement = document.getElementById('highScore');
        const historyElement = document.getElementById('history');
        const clickArea = document.getElementById('clickArea');

        function updateHighScore() {
            if (counter > highScore) {
                highScore = counter;
                highScoreElement.textContent = `High Score: ${highScore}`;
            }
        }

        function updateHistory() {
            const timestamp = new Date().toLocaleTimeString();
            history.push(` ${counter} at ${timestamp}`);
            const historyItem = document.createElement('div');
            historyItem.textContent = ` ${counter} - ${timestamp}`;
            historyElement.appendChild(historyItem);
        }

        function resetCounter() {
            updateHighScore();
            updateHistory();
            counter = 0;
            counterElement.textContent = `Clicks: ${counter}`;
        }

        function startCounter() {
            interval = setInterval(() => {
                resetCounter();
                clearInterval(interval);
                restartTimeout = setTimeout(startCounter, 5000);
            }, 10000);
        }

        clickArea.addEventListener('click', () => {
            counter++;
            counterElement.textContent = `Clicks: ${counter}`;
        });

        startCounter();