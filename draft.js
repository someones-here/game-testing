import Entity from "./architecture/Entity.js";
import Item from "./architecture/Item.js";
import Weapon from "./classes/Weapon.js";
import { DamageComponent, DurabilityComponent } from "./component.js";
import { InventoryComponent } from "./e-component.js";

const sword = new Weapon({
    id: "sword",
    name: "Sword",
    description: "This is a sword."
});

sword.addComponent(new DurabilityComponent(100));
sword.addComponent(new DamageComponent({
    blunt: 4,
    cut: 30,
    pierce: 10,
    effects: [ "bleeding" ]
}));

const apple = new Item({
    id: "apple",
    name: "Apple",
    description: "this is an apple.",
    tags: [ "food" ]
})

const bandit = new Entity({
    id: "bandit",
    name: "Bandit",
    category: [ "hostile" ]
})

const bag = new InventoryComponent({
    maxWeight: 20,
    maxLength: 200,
    maxVolume: 50,
    qualities: [ "waterproof" ]
});

bandit.addComponent("inventory", bag);

bag.addItem(sword, 1);
bag.addItem(apple, 10);

const trashCan = bag.getItem(apple.id, 5);

console.log(trashCan);

console.log(bandit);