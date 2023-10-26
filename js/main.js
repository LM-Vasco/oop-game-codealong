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
        this.board = document.getElementById('player');
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

class Obstacle {
    constructor() {
        this.positionX = 50;
        this.positionY = 100;
        this.height = 10;
        this.width = 30; 
        this.obstacleElm = null;
        
        this.createDomElement();
    }

    createDomElement() {
        this.obstacleElm = document.createElement('div');

        this.obstacleElm.classList.add('obstacle');
        this.obstacleElm.style.width = this.width + 'vw';
        this.obstacleElm.style.height = this.height + 'vh';
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.obstacleElm);
    }

    moveDown(){
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + 'vh'
    }
}


//EVENT LISTENERS

const player = new Player('Nerd');
player.helloWorld();

const obstaclesArray = [];

setInterval(() =>{
    obstaclesArray.push(new Obstacle());
}, 2000)

setInterval(() => {
    obstaclesArray.forEach(element => element.moveDown())
}, 50);


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