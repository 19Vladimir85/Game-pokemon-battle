// protection - массив стихий врагов от которых уменьшается урон, а сам наношу урон сильнее.
//harm - урон увеличивается, а наношу им меньше повреждений.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

class Pokemon {
    constructor(element, experience, level, protection, harm, health = 100, life = 5) {
        this.element = element;
        this.experience = experience;
        this.level = level;
        this.protection = protection;
        this.harm = harm;
        this.health = health;
        this.life = life;
        this.damage = 0;
        this.levelsInfo = [0,300,600,900];
    }
    upExperience(experience) {
        this.experience += experience; 
        for (let i = 0; i<this.levelsInfo.length; i++) {
            if (this.levelsInfo[i] < this.experience) {
                this.level = i;
            }
        }
    }
    downHealth(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.life--;
            this.health = 100;
        }
    }
    generateDamage() {
        this.damage = getRandomInt(1, 20)
    }
}

class Bulbozavr extends Pokemon {
    constructor(element, experience, level, protection, harm, health = 100, life = 5, phrase = "") {
        super(element, experience, level, protection, harm, health = 100, life = 5)
        this.phrase = phrase;
    }
    getAttack(enamy) {
        this.generateDamage()
        if (this.protection.includes(enamy.element)) {
            this.damage += 3;
        }
        if (this.harm.includes(enamy.element)) {
            this.damage -= 1;
        }
    }
    takeDamage(enamy) {
        let damage = enamy.damage;
        if (this.protection.includes(enamy.element)) {
            damage -= 3;
        }
        if (this.harm.includes(enamy.element)) {
            damage += 1;
        }
        this.downHealth(damage);
    }
    round(enamy) {
        this.getAttack(enamy)
        this.takeDamage(enamy)
        this.upExperience(getRandomInt(100, 200))
    }
}

export const bulbozavr1 = new Bulbozavr("fire", 0, 0, ["fire"], ["water"], 100, 5, "I am Bulbozavr1")
export const bulbozavr2 = new Bulbozavr("water", 0, 0, ["water"], ["fire"], 100, 5, "I am Bulbozavr2")
