// This is the Player class
// Everything related to it will be here

class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.height = 15;
    this.width = 15;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;

    this.playerElm = document.getElementById("player");
    this.board = document.getElementById("player");
    this.playerElm.style.width = this.width + "vw";
    this.playerElm.style.height = this.height + "vh";
    this.playerElm.style.left = this.positionX + "vw";
    this.playerElm.style.bottom = this.positionY + "vh";
  }

  helloWorld() {
    console.log(`${this.playerName} has joined the world!`);
  }

  moveLeft() {
    this.positionX--;
    this.playerElm.style.left = this.positionX + "vw";
  }

  moveRight() {
    this.positionX++;
    this.playerElm.style.left = this.positionX + "vw";
  }
}

class Obstacle {
  constructor() {
    this.height = 10;
    this.width = 30;
    this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
    this.positionY = 100;
    this.obstacleElm = null;

    this.createDomElement();
  }

  createDomElement() {
    this.obstacleElm = document.createElement("div");

    this.obstacleElm.classList.add("obstacle");
    this.obstacleElm.style.width = this.width + "vw";
    this.obstacleElm.style.height = this.height + "vh";
    this.obstacleElm.style.left = this.positionX + "vw";
    this.obstacleElm.style.bottom = this.positionY + "vh";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.obstacleElm);
  }

  moveDown() {
    this.positionY--;
    this.obstacleElm.style.bottom = this.positionY + "vh";
  }
}

//EVENT LISTENERS

const player = new Player("Nerd");
player.helloWorld();

const obstaclesArray = [];

setInterval(() => {
  obstaclesArray.push(new Obstacle());
}, 2000);

setInterval(() => {
  obstaclesArray.forEach((element) => {
    element.moveDown();

    if (element.positionY < 0 - element.height) {
        element.obstacleElm.remove();

        obstaclesArray.shift();
    }

    if (
      player.positionX < element.positionX + element.width &&
      player.positionX + player.width > element.positionX &&
      player.positionY < element.positionY + element.height &&
      player.positionY + player.height > element.positionY
    ) {
      // Collision detected!
      location.href = "./gameover.html";
    }

   
  });
}, 50);

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
    default:
  }
});
