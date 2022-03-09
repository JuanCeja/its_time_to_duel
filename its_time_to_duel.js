class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }    
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        console.log(`${this.name} attacked ${target.name}`)
        target.resilience = target.resilience - this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    useEffect(target){
        target.resilience += this.magnitude
    }
    pairProgrammingeffect(target){
        target.power += this.magnitude
    }
}
// =========UNITS=========
const RedBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const BlackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4)

// =========EFFECTS========
const HardAlgorithm = new Effect('Hard Algorithm', 2, "increase target's resilience by 3", 'resilience', 3)
const UnhandedPromiseRejection = new Effect('Unhanded Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2)
const PairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2)

// ==========TURNS===========

// == 1 ==
console.log(RedBeltNinja);
HardAlgorithm.useEffect(RedBeltNinja)
console.log(RedBeltNinja);

// == 2 ==
console.log(RedBeltNinja);
UnhandedPromiseRejection.useEffect(RedBeltNinja)
console.log(RedBeltNinja);

// // == 3 ==
console.log(BlackBeltNinja);
console.log(RedBeltNinja);
PairProgramming.pairProgrammingeffect(RedBeltNinja)
RedBeltNinja.attack(BlackBeltNinja)
console.log(RedBeltNinja);
console.log(BlackBeltNinja);