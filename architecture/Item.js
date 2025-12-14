import Base from "./Base.js";

class Item extends Base {
    constructor({
        id,
        name = "item",
        description = "",
        tags = []
    }) {
        super({
            id,
            name,
        });
        
        this.description = description;
        this.tags = new Set(tags);
    }
}

export default Item;