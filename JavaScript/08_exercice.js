//https://www.youtube.com/watch?v=dEo7gIx1rL4&list=PLeVsejBb88k-fOgSGug4KUyhEPyeVDgJP&index=17


class pokemon {

    constructor(name, hp, luck)
    {
        this.name = name;              
        this.hp = hp;
        this.luck = luck;
    }


generateRandomDefenseAttack(min, max) {
    return Math.floor(Math.random() * (max - min + min) + min);         // Math.floor = arrondi à l'entier inférieur
}

    isLucky() {                             // méthode isLucky qui permet de savoir si le pokemon est chanceux 
        let chance = Math.random();                             // Math.random() = génère un nombre aléatoire entre 0 et 1

// if(chance < this.luck) {
//     return true;
// } else {
//     return false;
// }

//condition ternaire
return(chance <= this.luck) ? true : false;           // Si chance est inférieur ou égal à la chance du pokemon, retourne true sinon retourne false    
    }

    attackPokemon(pokemonEnemy)  {          // méthode attackPokemon qui permet d'attaquer un autre pokemon

        // pokemon qui attaque
        this.attack = this.generateRandomDefenseAttack(10, 20);          // attaque = génération de dégats aléatoires entre 10 et 20
        this.defense = this.generateRandomDefenseAttack(1, 10);         // défense = génération de défense aléatoires entre 1 et 10

        //pokemon qui defend
pokemonEnemy.attack = this.generateRandomDefenseAttack(10, 20);          // attaque = génération de dégats aléatoires entre 10 et 20
pokemonEnemy.defense = this.generateRandomDefenseAttack(1, 10);         // défense = génération de défense aléatoires entre 1 et 10

       
        if(this.isLucky()) {
            let damage = this.attack - pokemonEnemy.defense;          // dégats = attaque du pokemon - défense de l'ennemi
            console.log(this.name + " inflige " + damage + " dégats à " + pokemonEnemy.name);          // affiche le nom du pokemon qui attaque, les dégats infligés et le nom du pokemon attaqué
            pokemonEnemy.hp -= damage;                                 // points de vie de l'ennemi = points de vie de l'ennemi - dégats
        // pokemonEnemy.hp = pokemonEnemy.hp - damage;                    // points de vie de l'ennemi = points de vie de l'ennemi - dégat    
        console.log(pokemonEnemy.name + " à dorénavant " + pokemonEnemy.hp + " point de vie " );  // affiche le nom du pokemon attaqué et ses points de vie
    
            if(pokemonEnemy.hp <= 0) {
                alert(this.name + " à vaincu " + pokemonEnemy.name + " ! FIN DU JEU .");          // affiche le nom du pokemon qui a vaincu l'autre
            }

    } else {
        console.log(this.name + " a raté son attaque, 0 dégats infligés à " + pokemonEnemy.name);          // affiche le nom du pokemon qui a raté son attaque
    }
    }
   
}

let pikachu = new pokemon("Pikachu", 100, 0.2);              // new = mot clé pour instancier une classe
let bulbizarre = new pokemon("Bulbizarre", 100, 0.2);              // pokemon = nom de la classe


while(pikachu.hp > 0 && bulbizarre.hp > 0)                                     // Tant que les deux pokemons ont des points de vie
{
    pikachu.attackPokemon(bulbizarre);                                     // pikachu attaque bulbizarre

    if(bulbizarre.hp > 0)                                     // Si bulbizarre a encore des points de vie
    {
        bulbizarre.attackPokemon(pikachu);                                     // bulbizarre attaque pikachu
    }
}