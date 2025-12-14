class Base {
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

export default Base;