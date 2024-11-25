////############################//
////                            //
////     USER   FUNCTIONS       //
////                            //
////############################//



function squareNumber() {

    return 2 * 2; // return statement.
    // je ne peur rien avoir après le return.
}

function squareNbr (number) {  // argument (une variable en entrée de ma fonction).
    return number * number;
}

squareNbr(2); // 2 est récupéré en argument de la fonction, on appelle ça lors de l'appel un paramètre.
squareNbr(12); 
squareNbr(22);


function ttc(ht, tva) {
    return ht * (1 + tva / 100);
}

ttc(350, 20); // 420