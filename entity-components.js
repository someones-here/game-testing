class BodyComponent {
    constructor() {
        this.type = "body";
        this.parts = new Map();
    }

    addPart(part) {
        this.parts.set(part.name, part);
    }

    getPart(name) {
        return this.parts.get(name);
    }

    getAllParts() {
        return [...this.parts.values()];
    }
}

class BodyPart {
    constructor({ name }) {
        this.name = name;
        this.components = new Map();
    }

    addComponent(component) {
        this.components.set(component.type, component);
    }

    getComponent(type) {
        return this.components.get(type);
    }
}



class HealthComponent {
    constructor({ max }) {
        this.type = "health";
        this.max = max;
        this.current = max;
    }

    applyDamage(amount) {
        this.current -= Math.max(0, this.current - amount);
    }

    isDestroyed() {
        return this.current <= 0;
    }
}