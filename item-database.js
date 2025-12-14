const items = [
    {
        id: "sword",
        name: "Sword",

        damage: {
            type: {
                    blunt: 2,
                    cut: 35,
                    pierce: 15,
            },
            effect: [ "bleed" ]
        },

        durability: {
            current: 50,
            max: 50
        },
        tag: [ "weapon" ]
    },
    {
        id: "bat",
        name: "Baseball bat",


        damage: {
            type: {
                blunt: 25,
                cut: 0,
                pierce: 0,
            },
            effect: [ "stun" ]
        },

        durability: {
            current: 30,
            max: 30
        },
        tag: [ "weapon" ]
    }
];

export default function getItemById(id = "") {
    const item = items.find(item => item.id === id);
    
    if(!item) throw new Error(`Item with id "${id}" not found.`);
    
    return { ...item };
}