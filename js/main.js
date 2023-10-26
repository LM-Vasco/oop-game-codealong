// This is the Player class
// Everything related to it will be here

class Player {
    constructor(playerName){
        this.playerName = playerName;
        this.positionX = 0;
        this.positionY = 0;
        this.height = 15;
        this.width = 15;
        this.playerElm = document.getElementById('player');

        this.playerElm.style.width = this.width + 'vw';
        this.playerElm.style.height = this.height + 'vh';

        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
    }

    helloWorld(){
        console.log(`${this.playerName} has joined the world!`);
    }

    moveLeft() {
        this.positionX--;

        this.playerElm.style.left = this.positionX + 'vw';
    }

    moveRight() {
        this.positionX++;

        this.playerElm.style.left = this.positionX + 'vw';
    }
}

const player = new Player('Nerd');
player.helloWorld();

document.addEventListener('keydown', (event) => {
    switch(event.code) {
        case 'ArrowLeft':
            player.moveLeft();
            console.log(player.positionX)
            break;
        case 'ArrowRight':
            player.moveRight();
            console.log(player.positionX)
            break;
        default:
    }
})