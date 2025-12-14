export class DamageComponent {
    constructor({
        blunt = 0,
        cut = 0,
        pierce = 0,
        effects = []
    }) {
        this.type = "damage";
        this.damage = { blunt, cut, pierce };
        this.effects = effects;
    }

    applyToAttack(attack) {
        attack.damage.blunt += this.damage.blunt;
        attack.damage.cut += this.damage.cut;
        attack.damage.pierce += this.damage.pierce;

        attack.effects.push(...this.effects);
    }
}

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
        returnthis.current <= 0;
    }
}