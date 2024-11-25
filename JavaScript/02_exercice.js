// https://www.youtube.com/watch?v=4ccq3n-GrMA&list=PLeVsejBb88k-fOgSGug4KUyhEPyeVDgJP&index=25




function playGame() {  

    const TOO_HIGHT = "Chiffre trop haut";
    const TOO_LOW = "Chiffre trop bas";
    const CORRECT = "Chiffre correct";
    
    let chances = 3
    let answer; 
    
    const SECRET_NUMBER = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(SECRET_NUMBER)
    
    while(chances > 0) {
    
    answer = prompt ("Choisi un nombre entre 1 et 10")
    
    if(isNaN(answer) || (answer > 10 || answer < 1)) {  // boucle imbriquée
        alert("fdp un nombre entre 1 et 10 !")
        continue;  // permet d'aller a l'itération suivante sans retirer de "chances"
    }
    
    
    
        if (answer < SECRET_NUMBER) {
            alert(TOO_LOW);
        } else if (answer > SECRET_NUMBER) {
            alert(TOO_HIGHT);
        } else {
            alert(CORRECT);
            break; // ça vous fait sortir de la boucle
        }
        chances --;
        // chances = chances - 1;
    }
    
    if(chances <= 0) {
        alert("HAHAHAH, tu as perdu " + SECRET_NUMBER);
    } 
    
    let playAgain = confirm("Do you want to play again ?");
    if(playAgain) {
        playGame();
    } else {
        alert("Merci pour votre partie !")
    }
    
    
    }
    
    playGame();