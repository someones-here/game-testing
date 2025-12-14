export class HealthComponent {
    constructor( max ) {
        this.type = "health";

        this.max = max;
        this.current = max;
    }

    applyDamage(amount) {
        if (amount < 0) throw new Error("Damage < 0");
        this.current = Math.max(0, this.current - amount);
    }

    heal(amount) {
        if (amount < 0) throw new Error("Heal < 0");
        this.current = Math.min(this.current + amount, this.max);
    }

    isDestroyed() {
        return this.current <= 0;
    }
}

export class BodyComponent {
    constructor() {
        this.type = "body";

        this.parts = new Map();
    }

    addPart(part) {
        if (!part.name) throw new Error("part.name not found.");
        this.parts.set(part.name, part);
    }

    getPart(name) {
        const part = this.parts.get(name);
        if (!part) throw new Error(`parts.${name} not found`);
        return part;
    }

    getAllParts() {
        return [...this.parts.values()];
    }
}

export class BodyPart {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;

        this.components = new Map();
    }

    addComponent(component) {
        if (!component.type) {
            throw new Error("Component must have a 'type'");
        }
        this.components.set(component.type, component);
    }
    
    getComponent(type) {
        return this.components.get(type);
    }
    
    hasComponent(type) {
        return this.components.has(type);
    }
}

export class InventoryComponent {
    constructor({
        maxWeight = 0,
        maxLength = 0,
        maxVolume = 0,
        qualities = []
    }) {
        this.type = "inventory";

        this.maxWeight = maxWeight;
        this.maxLength = maxLength;
        this.maxVolume = maxVolume;
        this.qualities = qualities;

        this.storage = new Map(); // Values are 2-index array
    }

    addItem( item, amount ) { // Set item using id; can be used to set items
        if (amount <= 0) throw new Error("amount <= 0");
        if (!item.id) throw new Error("item.id not found.");

        const entry = this.storage.get(item.id);
        if (entry) {
            entry[1] += amount;
        } else {
            this.storage.set(item.id, [ item, amount ]);
        }
    }

    getItem( id, amount ) { // Gets item and amount and reduces item storage amount
        if (amount <= 0) throw new Error("amount <= 0");
        const entry = this.storage.get(id);
        if (!entry) throw new Error("item not found.");
        if (amount > entry[1]) throw new Error("get item amount exceeded storage item amount.");
        
        entry[1] -= amount;
        
        if (entry[1] === 0) {
            this.deleteItem(id);
        } else if (entry[1] < 0) throw new Error(`unexpected newItemAmount < 0; value: ${entry[1]}; check for code error.`);
        
        return {
            item: entry[0],
            amount: amount
        };
    }
    
    forceSetItem(item, amount ) { // Explicitly sets item
        if (amount <= 0) throw new Error("amount <= 0");
        if (!item.id) throw new Error("item not found.");

        this.storage.set(item.id, [ item, amount ]);
    }
    
    deleteItem(id) { // Explicitly removes item and returns true if deleted
        if (!this.storage.has(id)) throw new Error("item not found.");
        
        return this.storage.delete(id);
    }

    getAllItems() {
        return new Map(this.storage);
    }
}

