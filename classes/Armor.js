import Item from "./Item.js";

class Armor extends Item {
    constructor({ name = "armor" }) {
        super({
            name,
            tags: [ "weapon" ]
        });
    }
}

export default Armor;