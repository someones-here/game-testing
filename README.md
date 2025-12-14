# NAMING CONVENTIONS:


- Component -> Class capable of giving specific function to an item/entity but is not independent on its own.
- Module -> Independent class that can be used to add function/construct a more complex module.


## Component structure:
Components must at least have:
- type: string

## RULE IMPORTANT

1️⃣ Objects own their own state
2️⃣ Components store data + local behavior
3️⃣ Systems perform logic between objects
4️⃣ Items never act by themselves
5️⃣ Entities never mutate each other directly

# ENGINE STRUCTURE

- Game objects are called "Moodule", made up of "Component"
- Modules cannot modify other modules; only within itself.
- Components only care the things in their scope