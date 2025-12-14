export class DurabilityComponent {
    constructor( max ) {
        this.type = "durability";

        this.max = max;
        this.current = max;
    }

    onUse() {
        if (this.current > 0) {
            this.current--;
        }
    }

    isBroken() {
        return this.current <= 0;
    }
}

export class DamageComponent {
    constructor({
        blunt = 0,
        cut = 0,
        pierce = 0,
        effects = []
    }) {
        this.type = "damage";

        this.blunt = blunt;
        this.cut = cut;
        this.pierce = pierce;
        this.effects = effects;
    }

    applyToAttack(attack) {
        if (!attack.damage) {
            throw new Error("attack.damage missing.");
        }

        attack.damage.blunt += this.blunt;
        attack.damage.cut += this.cut;
        attack.damage.pierce += this.pierce;

        attack.effects.push(...this.effects);
    }
}