import getEntityById from "./entity-database.js";
import Player from "./classes/Player.js";
import Entity from "./classes/Entity.js/index.js";

document.getElementById("button").addEventListener("click", (ev) => {
    if (opponent.length > 0) {
        const result = player.attack(opponent[0]);
        // console.log(result); // DEBUG REMOVE LATER

        if (result.defeated) removeEnemy();
        if (result.gameOver) showGameOver();
        if (result.error) console.error(result.error);
        if (result.warn) console.warn(result.warn);

    } else {
        console.log("No opponent!");
    }
});

function removeEnemy() {
    const removedEnemy = opponent.shift();
    if (!removedEnemy) return;
    console.log(`Removed ${removedEnemy.name}`);
}

function showGameOver() {
    alert("Game Over");
    //WIP
}

const player = new Player({
    name: "Mark",
    defense: 0,
    damage: 30,
    dodge: 0,
});

const opponent = [
    new Entity(getEntityById("bandit")),
    new Entity(getEntityById("zombie")),
];