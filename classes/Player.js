import Entity from "./Entity.js";

class Player extends Entity {
    constructor({
        name = "Player",
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
        wield = null,
    }) {
        super({
            name,
            defense,
            damage,
            dodge,
            bodyPart,
            wield,
        });
    }
}

export default Player;