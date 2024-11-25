////############################//
////                            //
////           ARRAY            //
////                            //
////############################//


// En JS tout est objet, même les tableaux
// String - Int - Array - Balise HTML 


let numbers = [23, 78, 991];
let names = ['John', 'Jane', 'Jack'];
let infos = [41, "Guillaume", true, ["Jeux vidéos", "Informatique", "pêche"] ];

console.log(infos[1]); // Guillaume
console.log(infos[3][1]); // Informatique


// push
numbers.push(22); // ajoute 22 à la fin du tableau
// slice
names.slice(1, 3); // Jane, Jack (1er paramètre = début, 2ème paramètre = fin)
// length
numbers.length; // 4 (taille du tableau)




////############################//
////                            //
////      OBJECT  CUSTOM        //
////                            //
////############################//


let monObjet = {}; // objet vide
let monObjet2 = new Object(); // objet vide autre déclaration possible

let misteryom = { // objet avec des propriétés

    prenom: "Guillaume",                                                        // propriété
    age: 41,                                                                    // propriété
    nationalite: "Français",                                                    // propriété
    poids: 89,                                                                  // propriété
    santeMentale: 10,                                                           // propriété
    loisirs: ["Jeux vidéos", "Informatique", "pêche"],                          // propriété
    reviserSesCours : function() {                                              // méthode
        console.log("J'écoute mon prof Samih en bossant à la maison");          // méthode
    },
    eat : function() {                        // méthode
        this.poids++;                         // this = l'objet en cours
    }
};

console.log(misteryom.age); // 41
console.log(misteryom.poids); // 89
misteryom.eat();             // appel de la méthode eat
console.log(misteryom.poids); // 90

misteryom.nationalite = "Tunisien"; // modification de la propriété nationalite
misteryom.santeMentale = misteryom.santeMentale - 1;  // décrémentation de la propriété santeMentale
misteryom.santeMentale -= 1; // équivalent à la ligne précédente
