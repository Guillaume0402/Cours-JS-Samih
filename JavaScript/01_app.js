console.log("Hello, World!"); // fonction prédéfinie qui affiche un message dans la console du navigateur


                                                    ////############################//
                                                    ////                            //
                                                    ////     Variables              //
                                                    ////                            //
                                                    ////############################//


// Espace en mémoire (boite virtuelle ) dans laquelle on va stocker une ou plusieurs données

// let first_name = prompt("Quel est ton prénom ?"); // prompt est une fonction prédéfinie qui affiche une boite de dialogue pour demander à l'utilisateur de saisir une information
// let lastName = prompt("Quel est ton nom ?"); //camelCase

// let answer_pgm = confirm("Es-tu un pgm pour affronter ZEN?"); // boolean
// console.log(answer_pgm);



                                                    ////############################//
                                                    ////                            //
                                                    ////     Concaténation          //
                                                    ////                            //
                                                    ////############################//

// Lier bout a bout deux ou plusieurs chaine de caractères

// alert("Bonjour " + first_name + " " + lastName); // Fonction prédéfini, affiche une boite de dialogue avec le message

let fullName = "Guillaume Maignaut"; // string (chaine de caractères)
let age = 41; // integer (entier)
let price = 33.6; // float (décimal)
let pgm = false; // boolean (vrai ou faux)
let legalAge = true;
let hobbies = ["musique", "sport", "lecture"]; // array (tableau) => stocker plusieurs valeurs
let person = ["Guillaume", 33, true, ["val1, val2"]]; // tableau multidimensionnel

//valeur de sam_pgm ce sera la valeur dans answer_pgm
// let sam_pgm = answer_pgm;



                                                    ////############################//
                                                    ////                            //
                                                    ////  Opérateurs arithmétiques  //
                                                    ////                            //
                                                    ////############################//

let res1 = 4 + 4; // addition
let res2 = 4 - 4; // soustraction
let res3 = 4 * 4; // multiplication
let res4 = 4 / 4; // division
let res5 = 10 % 3; // (1) modulo (reste de la division euclidienne)

//écraser la variable res5
res5 = 11 % 4;



                                                    ////############################//
                                                    ////                            //
                                                    //// Opérateurs de comparaison  //
                                                    ////                            //
                                                    ////############################//

let result = 4 > 3; // supérieur // true
result = 4 >= 3; // supérieur ou égal  // true
result = 4 < 3; // inférieur  // false
result = 4 <= 4; // inférieur ou égal  // true


result = 4 == 3; // égalité // false
result = 4 == 4; // égalité // true
result = 4 === 4; // égalité stricte (valeur et type) // true
result = 4 === "4"; // false

result = 4 != 3; // différent de // true
result = 4 !== 3; // différent de // true
result = 4 !== 4; // différent de // false
result = 4 !== "4"; // différent de // true


// toute comparaison en JS renvoie un boolean (true ou false) (vrai ou faux)



                                                    ////############################//
                                                    ////                            //
                                                    ////        Constantes          //
                                                    ////                            //
                                                    ////############################//

const tva = 20; // constante (valeur qui ne change pas)
// tva = 10; // erreur impossible de réaffecter une valeur à une constante

// on mettra les balises html qu'on manipule dans des constantes
// pour des questions de performance 



                                                    ////############################//
                                                    ////                            //
                                                    ////Valeur primitives et Objets //
                                                    ////                            //
                                                    ////############################//

// En javascript tout est objet (on a des objets prédéfinis et des objets personnalisés)
// un string, un number, un array, un boolean, une date, null, undefined tous sont des objets
// un objet c'est une boite dans laquelle on retrouve des données
// et des actions qui permettent de manipuler la donnée a l'intérieur
// ci-dessous str est un objet string
// et j'ai des actions qui me permettent de manipuler la chaines de caractères
// ces actions à l'intérieur de mes objets on appelle ça des méthodes
// une méthode c'est une fonction qui est dans un objet



                                                    ////############################//
                                                    ////                            //
                                                    ////          String            //
                                                    ////                            //
                                                    ////############################//


let text = "Hello World!"; // c'est une variable objet string
console.log(text.length); // méthode length qui me permet de connaitre la longueur de la chaine de caractères
console.log(text.toUpperCase()); // méthode toUpperCase qui me permet de mettre en majuscule la chaine de caractères
console.log(text.toLowerCase()); // méthode toLowerCase qui me permet de mettre en minuscule la chaine de caractères
console.log(text.slice(3, 7)); // méthode slice qui me permet de découper la chaine de caractères

console.log(text); // Hello World!

// Je vais avoir des actions prédéfinies pour :
// String
// Number
// Array
// Boolean
// Date
// Null
// Undefined




                                                    ////############################//
                                                    ////                            //
                                                    ////          Number            //
                                                    ////                            //
                                                    ////############################//

let nbr = 2
console.log(typeof nbr); // number
console.log(nbr.toString()); // méthode toString qui me permet de convertir un nombre en chaine de caractères




                                                    ////############################//
                                                    ////                            //
                                                    ////     Null et Undifined      //
                                                    ////                            //
                                                    ////############################//


let score = null; // null (vide)
let nbrGames; // undefined (non défini) j'ai déclaré la variable mais je ne lui ai pas affecté de valeur




                                                    ////############################//
                                                    ////                            //
                                                    ////        Conditions          //
                                                    ////                            //
                                                    ////############################//

//IF

let myAge = 18;

if(myAge >= 18) { // si la condition est true (vrai)
    console.log("Bienvenue sur mon site"); // alors j'affiche un message
} else { // sinon
    console.log("Scuze my french get the hell out of there !"); // j'affiche un autre message
}

// vous aller demander au user sa couleur préférée
// si ça couleur préférée est le rouge => change le background en rouge
// si ça couleur préférée est le yellow => change le background en yellow
// si ça couleur préférée est le violet => change le background en violet
// sinon => change le background en vert

// let favColor = prompt("Quelle est ta couleur préférée ? rouge, jaune, violet ?");
let favColor = "white";
// DOM
// document object model
// c'est un objet qui représente la page web
// c'est un gros objet
// qui contient des sous objets (les balises html)
// chaque objet à des méthodes prédéfinies et des propriétés
// pour modifier l'aspect de chaque balise


if(favColor === "rouge") {
    document.body.style.backgroundColor = "red";
} else if(favColor === "jaune") {
    document.body.style.backgroundColor = "yellow";
} else if(favColor === "violet") {
    document.body.style.backgroundColor = "violet";
} else {
    document.body.style.backgroundColor = "green";
}



                                                    ////############################//
                                                    ////                            //
                                                    ////         Boucles            //
                                                    ////                            //
                                                    ////############################//

let numbers = [27, 289, 999, 1893]; // tableau de nombres (array)
// console.log(numbers[0] * numbers[0]); // 27 * 27
// console.log(numbers[1] * numbers[1]); // 289 * 289
// console.log(numbers[2] * numbers[2]); // 999 * 999
// console.log(numbers[3] * numbers[3]); // 1893 * 1893 

// FOR     (si je connais a l'avance combien de fois je dois répéter le code)

// départ
// condition
// incrémentation

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * numbers[i]); 
}

for(let i = 10; i < 15; i++) {
    console.log("Tour n° " + i);
}

// WHILE

let i = 0; // départ
while(i < numbers.length) { // condition
    console.log(numbers[i] * numbers[i]); 
    i++; // incrémentation ( pour que la boucle ne soit pas infinie)
}

let nber;
// tant que le chiffre n'est pas compris entre 1 et 10
// je redemande à l'utilisateur de saisir un chiffre
// si c'est le cas 
// j'affiche le résultat

while(isNaN(nber) || (nber > 10 || nber < 1)) {
    nber = prompt("Tu es sérieux, je t'ai dit donne un chiffre entre 1 et 10");
}

alert("Bravo tu as bien suivi les consignes " + nber * nber);


// DO WHILE

do { nber = prompt("Donne un chiffre entre 1 et 10 pour le multiplier par lui même ");
} while(isNaN(nber) || (nber > 10 || nber < 1))
    alert("Bravo tu as bien suivi les consignes " + nber * nber);

// DRY
// Don't Repeat Yourself



////############################//
////                            //
////   Opérateurs Logiques      //
////                            //
////############################//

// || OR (ou)
let nationality = "English";
if(nationality == "English" || nationality == "American") {
    console.log("Hello !");
}

// && AND (et)
let city = "Nice";
let firstName = "Brice";

if(city == "Nice" && firstName == "Brice") {
    console.log("Ca fart ?");
}

// Exercice 1


// Exercice : jeu du nombre secret
// objectif
// le joueur doit deviner un nombre aléatoire entre 1 et 10. A chaque essai, le programme donnera un indice (trop haut, trop bas, ou correct). Le jeu doit permettre de relancer une partie en appuyant sur une touche .

// Etapes
// Variables et constantes : Créez des constantes pour les messages d'indice ( par exemple, "trop haut", "trop bas", "correct") et une variable pour stocker le nombre d'essais restants.
// Conditions et boucles : Utilisez une boucle pour permettre a l'utilisateur de faire polusieurs essais jusqu'a qu'il devine le nombre ou que les essais soient epuisés.
// Méthode pour générer un nombre aléatoire.
// Méthode pour verifier la réponse et retourner le bon message.
// Bonus : Afficher les essais restants après chaque tentative

// Mega bonus : 3 essais









////############################//
////                            //
////          Array             //
////                            //
////############################//

////############################//
////                            //
////          Dates             //
////                            //
////############################//






