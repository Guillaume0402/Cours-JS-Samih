                                                 ////############################//
                                                 ////                            //
                                                 ////          CLASSES           //
                                                 ////                            //
                                                 ////############################//



class Person {  // Pascal naming convention (first letter of each word is capitalized)

    // il est appelé automatiquement lors de l'instance d'une classe
    constructor(firstName, name) {   // Permet d'initialiser les propriétés de l'objet lors de sa création 
        this.name = name;    // this = l'objet en cours
        this.firstName = firstName;
    }

    sayHello() {
        console.log("Hey salut, je m'appele " + this.name + " " + this.firstName);  // méthode sayHello qui affiche le nom et le prénom de l'objet
    }

}

const guillaume = new Person("Guillaume", "Maignaut");   //créer des objets a partir de l'instance d'une classe 
const yanis = new Person("Yanis", "Maignaut");           // new = mot clé pour instancier une classe
const stephane = new Person("Stéphane", "Maignaut");     // Person = nom de la classe

yanis.sayHello(); // Hey salut, je m'appele Yanis Maignaut
guillaume.sayHello(); // Hey salut, je m'appele Guillaume Maignaut
stephane.sayHello(); // Hey salut, je m'appele Stéphane Maignaut
