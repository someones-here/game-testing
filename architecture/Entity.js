// class Entity {

//     constructor({
//         name = "Entity",
//         defense = 0,
//         damage = 0,
//         dodge = 0,
//         bodyPart = {
//             head: { health: 45, armor: null},
//             chest: { health: 80, armor: null},
//             abdomen: { health: 65, armor: null},
//             leftArm: { health: 40, armor: null},
//             rightArm: { health: 40, armor: null},
//             leftLeg: { health: 45, armor: null},
//             rightLeg: { health: 45, armor: null}
//         },
//         wield = null,
//     }) {
//         this.name = name;
//         this.defense = defense;
//         this.damage = damage;
//         this.dodge = dodge;
//         this.bodyPart = bodyPart;
//         this.wield = wield;
//     }

//     get totalHealth() {
//         return Object.values(this.bodyPart)
//             .reduce((sum, part) => sum + part.health, 0);
//     }

//     heal(bodyPart, amount) {
//         if (!this.bodyPart[bodyPart]) return { error: "Invalid body part" }
//         if (amount <= 0) return { warn: "No healing applied." }

//         let health = this.bodyPart[bodyPart].health;
//         health += amount;
//         console.log(`Healed: ${bodyPart}, ${health -= amount} -> ${health}`);
//     }

//     takeDamage(bodyPart, amount) {
//         if (!this.bodyPart[bodyPart]) return { error: "Invalid body part" }
//         if (amount <= 0) return { warn: "No damage taken." };
        
//         let bp = this.bodyPart[bodyPart];
//         if (bp.armor) {
//             let armor = bp.armor;
//             armor.defense;
//         }
//         if (bodyPart === "head") {
//             bp.health -= amount;
//         }
//     } 

//     attack(target) {
//         if (!(target instanceof Entity)) { return { error: "Invalid target instanceof" } }
//         if (target.totalHealth)
//     }

//     attack(target) {
//         if (!(target instanceof Entity)) { return { error: "Invalid instanceof target" } }
//         if (target.health <= 0) { return { error: "Target health ≤ 0; unable to attack" } }

//         const systemChanges = {
//             hit: false,
//             gameOver: false,
//             defeated: false,
//         };

//         // Attack Logic

//         if (Math.random() > target.dodge / 100) {
//             const rngOfBodyPartHit = Math.random();
//             let bodyPartHit = "";
//             if (rngOfBodyPartHit < 0.07) {
//                 bodyPartHit = "head";
//             } else if (rngOfBodyPartHit < 0.34) {
//                 bodyPartHit = "chest";
//             } else if (rngOfBodyPartHit < 0.56) {
//                 bodyPartHit = "abdomen";
//             } else if (rngOfBodyPartHit < 0.66) {
//                 bodyPartHit = "leftArm";
//             } else if (rngOfBodyPartHit < 0.76) {
//                 bodyPartHit = "rightArm";
//             } else if (rngOfBodyPartHit < 0.88) {
//                 bodyPartHit = "leftLeg";
//             } else {
//                 bodyPartHit = "rightLeg";
//             }

//             const damageDeviation = 10 * (Math.random() - 0.5);
//             const armor = target.bodyPart[bodyPartHit].armor;
//             if (Math.random() > armor.coverage / 100 && armor.strength)
//             const damageDealt = Math.max(0, (this.damage - target.defense + damageDeviation));

//             const rawDamage = Math.max(0, this.damage - target.defense);
//             let change = 0;
//             if (armor.coverage >= 100) {
//                 console.log(`Armor on ${bodyPartHit} blocked all damage!`); // WIP; CHANGE LATER TO VARY BETWEEN ATTACK TYPES
//             } else {
//                 change = Math.max(0, rawDamage - (rawDamage * armor.coverage / 100));
//                 if (change === 0) console.warn(`Armor on ${bodyPartHit} blocked all damage!\nCareful! It still passed.`); // exception if somehow it passed
//                 console.log(`${target.name} hit on ${bodyPartHit}!\nDamage dealt: ${change}`); // WIP; MODIFY bodyPartHit part to make it proper as a phrase and a proper name
//             }
//             let part = target.bodyPart[bodyPartHit];
//             part.health = Math.max(0, part.health - change);
//             // console.log(target.bodyPart[bodyPartHit].health -= change);
//             systemChanges.hit = true;
//         } else { // dodge logic
//             console.log(target.name, "dodged!");

//             systemChanges.hit = false;
//         }

//         if (target.health <= 0) {
//             console.log(target.name, "defeated!");
//             systemChanges.defeated = true;
//         }

//         console.log(target.health);
//         console.log(target.bodyPart);
//         return systemChanges;
//     }
// };


// export default Entity;
import Base from "./Base.js";

class Entity extends Base {
    constructor({
        id,
        name = "entity",
        category = [],
    }) {
        super({
            id,
            name
        });

        this.category = new Set(category);
    }
}

export default Entity;