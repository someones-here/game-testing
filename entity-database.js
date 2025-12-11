const entities = [
    {
        id: "bandit",
        name: "Bandit",
        defense: 5,
        damage: 10,
        dodge: 5,
        bodyPart: {
            head: { health: 45, armor: { coverage: 0, strength: 0 } }, // wip; add: armor strength and coverage is based on armor type or what it is made of (like bronze helmet, iron chestplate)
            chest: { health: 80, armor: { coverage: 80, strength: 20 } },
            abdomen: { health: 65, armor: { coverage: 100, strength: 20 } },
            leftArm: { health: 40, armor: { coverage: 20, strength: 10 } },
            rightArm: { health: 40, armor: { coverage: 20, strength: 10 } },
            leftLeg: { health: 45, armor: { coverage: 90, strength: 20 } },
            rightLeg: { health: 45, armor: { coverage: 90, strength: 20 } } // add armor durability later
        }
    },
    {
        id: "zombie",
        name: "Zombie",
        defense: 0,
        damage: 15,
        dodge: 0,
        bodyPart: {
            head: { health: 45, armor: { coverage: 0, strength: 0 } },
            chest: { health: 80, armor: { coverage: 0, strength: 0 } },
            abdomen: { health: 65, armor: { coverage: 0, strength: 0 } },
            leftArm: { health: 40, armor: { coverage: 0, strength: 0 } },
            rightArm: { health: 40, armor: { coverage: 0, strength: 0 } },
            leftLeg: { health: 45, armor: { coverage: 0, strength: 0 } },
            rightLeg: { health: 45, armor: { coverage: 0, strength: 0 } } // add armor durability later
        }
    }
];

export default function getEntityById(id = "") {
    const entity = entities.find(entity => entity.id === id);
    
    if(!entity) throw new Error(`Entity with id "${id}" not found.`);
    
    return { ...entity };
}