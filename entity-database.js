const entities = [
    {
        id: "bandit",
        name: "Bandit",
        defense: 5,
        damage: 10,
        dodge: 5,
        bodyPart: {
            head: { health: 45, armor: null },
            chest: { health: 80, armor: null },
            abdomen: { health: 65, armor: null },
            leftArm: { health: 40, armor: null },
            rightArm: { health: 40, armor: null },
            leftLeg: { health: 45, armor: null },
            rightLeg: { health: 45, armor: null }
        }
    },
    {
        id: "zombie",
        name: "Zombie",
        defense: 0,
        damage: 15,
        dodge: 0,
        bodyPart: {
            head: { health: 45, armor:  null },
            chest: { health: 80, armor:  null },
            abdomen: { health: 65, armor:  null },
            leftArm: { health: 40, armor:  null },
            rightArm: { health: 40, armor:  null },
            leftLeg: { health: 45, armor:  null },
            rightLeg: { health: 45, armor:  null } // add armor durability later
        }
    }
];

export default function getEntityById(id = "") {
    const entity = entities.find(entity => entity.id === id);
    
    if(!entity) throw new Error(`Entity with id "${id}" not found.`);
    
    return { ...entity };
}