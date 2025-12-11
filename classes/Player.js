import Entity from "./classes/Entity.js";

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

export default Player;