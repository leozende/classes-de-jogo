
class Character {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    typeAttack() {

        switch (this.type.toLowerCase()) {
            case "guerreiro":
                return "espada"
            case "mago":
                return "magia"
            case "monge":
                return "artes marciais"
            case "ninja":
                return "shuriken"
            default: 
            return "incorreto"
        }
    }

    attack() {
        const attack = this.typeAttack();
        console.log(`O ${this.type} atacou usando ${attack}`);
    }

}

const aqueleCara = new Character("Incrivel", 15, "Mago");
const bomSenhor = new Character("Torpedo", 76, "Guerreiro");

console.log(aqueleCara);
console.log(bomSenhor);
aqueleCara.attack();
bomSenhor.attack();


