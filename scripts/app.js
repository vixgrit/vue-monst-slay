new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100
    },
    methods: {
        startGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameStarted = true;
        },
        restartGame: function() {
            this.startGame();
            this.gameStarted = false;
        },
        attack: function() {
            this.playerHealth -= Math.floor(Math.random()*(11)+5);
            this.monsterHealth -= Math.floor(Math.random()*(11)+5);
            this.checkForWin();
        },
        giveUp: function() {
            alert('You gave up!');
            this.restartGame();
        },
        checkForWin: function() {
            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.restartGame();
            }
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.restartGame();
            }
        }
    }
})
