new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        battleLog: []
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
            this.battleLog = [];
        },
        calculateDamage: function(max, min) {
            return Math.floor(Math.random()*(max - min + 1) + min);
        },
        tradeAttacks: function(playerHit, monsterHit) {
            this.playerHealth -= playerHit;
            this.monsterHealth -= monsterHit;
            this.battleLog.unshift({
                monster: 'Monster hits player for ' + playerHit,
                player: 'Player hits monster for ' + monsterHit
            });
        },
        attack: function() {
            var playerHit = this.calculateDamage(15, 5);
            var monsterHit = this.calculateDamage(15, 5);
            this.tradeAttacks(playerHit, monsterHit);
            this.checkWinLoss();
        },
        specialAttack: function() {
            var playerHit = this.calculateDamage(20, 10);
            var monsterHit = this.calculateDamage(20, 10);
            this.tradeAttacks(playerHit, monsterHit);
            this.checkWinLoss();
        },
        healUp: function() {
            if (this.playerHealth < 80) {
                var playerHit = this.calculateDamage(20, 10);
                var playerHeal = this.calculateDamage(20, 10);
                this.playerHealth += playerHeal;
                this.playerHealth -= playerHit;
                this.battleLog.unshift({
                    monster: 'Monster hits player for ' + playerHit,
                    player: 'Player heals himself for ' + playerHeal
                });
                this.checkWinLoss();
            }
            else {
                alert('You can\'t heal if your health is 80% of above!');
            }
        },
        giveUp: function() {
            alert('You gave up!');
            this.restartGame();
        },
        checkWinLoss: function() {
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
});
