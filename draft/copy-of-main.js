import getEntityById from "./entity-database.js";

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

class Entity {
    constructor({
        name = "Entity",
        defense = 0,
        damage = 0,
        dodge = 0,
        bodyPart = {
            head: { health: 45, armor: { coverage: 0, strength: 0 } },
            chest: { health: 80, armor: { coverage: 0, strength: 0 } },
            abdomen: { health: 65, armor: { coverage: 0, strength: 0 } },
            leftArm: { health: 40, armor: { coverage: 0, strength: 0 } },
            rightArm: { health: 40, armor: { coverage: 0, strength: 0 } },
            leftLeg: { health: 45, armor: { coverage: 0, strength: 0 } },
            rightLeg: { health: 45, armor: { coverage: 0, strength: 0 } }
        },
    }) {
        this.name = name;
        this.defense = defense;
        this.damage = damage;
        this.dodge = dodge;
        this.bodyPart = bodyPart;
    }

    get health() {
        return Object.values(this.bodyPart)
            .reduce((sum, part) => sum + part.health, 0);
    }

    heal(bodyPart, amount) {
        if (!this.bodyPart[bodyPart]) return { error: "Invalid body part" };
        if (amount <= 0) return { warn: "No healing applied." };

        let health = this.bodyPart[bodyPart].health;
        health += amount;
        console.log(`Healed: ${bodyPart}, ${health -= amount} -> ${health}`);
    }

    attack(target) {
        if (!(target instanceof Entity)) { return { error: "Invalid instanceof target" } }
        if (target.health <= 0) { return { error: "Target health ≤ 0; unable to attack" } }

        const systemChanges = {};

        if (Math.random() > target.dodge / 100) { // attack logic
            const rng = Math.random();
            let bodyPartHit = "";
            if (rng < 0.07) { //0.07
                bodyPartHit = "head";
            } else if (rng < 0.34) {
                bodyPartHit = "chest";
            } else if (rng < 0.56) {
                bodyPartHit = "abdomen";
            } else if (rng < 0.66) {
                bodyPartHit = "leftArm";
            } else if (rng < 0.76) {
                bodyPartHit = "rightArm";
            } else if (rng < 0.88) {
                bodyPartHit = "leftLeg";
            } else {
                bodyPartHit = "rightLeg";
            }

            // const attackStrength = 1; // placeholder; WIP; change so that it's based on entity skill strength values or item held something like that
            const rawDamage = Math.max(0, this.damage - target.defense);
            const armor = target.bodyPart[bodyPartHit].armor;
            let change = 0;
            if (armor.coverage >= 100) {
                console.log(`Armor on ${bodyPartHit} blocked all damage!`); // WIP; CHANGE LATER TO VARY BETWEEN ATTACK TYPES
            } else {
                change = Math.max(0, rawDamage - (rawDamage * armor.coverage / 100));
                if (change === 0) console.warn(`Armor on ${bodyPartHit} blocked all damage!\nCareful! It still passed.`); // exception if somehow it passed
                console.log(`${target.name} hit on ${bodyPartHit}!\nDamage dealt: ${change}`); // WIP; MODIFY bodyPartHit part to make it proper as a phrase and a proper name
            }
            let part = target.bodyPart[bodyPartHit];
            part.health = Math.max(0, part.health - change);
            // console.log(target.bodyPart[bodyPartHit].health -= change);
            systemChanges.hit = true;
        } else { // dodge logic
            console.log(target.name, "dodged!");

            systemChanges.hit = false;
        }

        if (target.health <= 0) {
            if (target instanceof Player) {
                systemChanges.gameOver = true;
            } else {
                console.log(target.name, "defeated!");
                systemChanges.defeated = true;
            }
        }

        console.log(target.health);
        console.log(target.bodyPart);
        return systemChanges;
    }
};

class Player extends Entity {
    constructor({
        name = "Player",
        defense = 0,
        damage = 0,
        dodge = 0,
        bodyPart
    }) {
        super({
            name,
            defense,
            damage,
            dodge,
            bodyPart,
        })
    }
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