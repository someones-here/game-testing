import Item from "./Item.js";

class Weapon extends Item{
    constructor({
        id,
        name = "weapon",
        description = "",
    }) {
        super({
            id,
            name,
            description,
            tags: ["weapon"]
        });
    }
}

export default Weapon;