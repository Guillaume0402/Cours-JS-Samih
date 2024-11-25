// https://www.youtube.com/watch?v=aXAtYxS6mIs&list=PLeVsejBb88k-fOgSGug4KUyhEPyeVDgJP&index=20




const MUSIQUE = ["Anissa - Wejdene", "Génération M - Cookiesan", "Djadja - Aya Nakamura", "Bella Ciao - Remy", "Minato - Cookiesan"  ];

let personnage = {
    prenom: "Guillaume",
    santeMentale: 10,
    perdreSanteMentale : function () {
        this.santeMentale--;
    },
    ecouteMusique : function () {
        const indexMusic = Math.floor(Math.random() * (5) );    
        return MUSIQUE[indexMusic];   
    }
};

let feuxRouges = 30;

while (personnage.santeMentale > 0 && feuxRouges > 0) {

    let musiqueJoue = personnage.ecouteMusique();

    if(musiqueJoue === "Anissa - Wejdene") {
        personnage.perdreSanteMentale();
        console.log("Tu as perdu 1 point de santé mentale, Annissa a été jouée il te reste " + personnage.santeMentale + " points de santé mentale");
    } else {
        console.log("Tu as de la chance, tu passes un feux rouge sans perdre de santé mentale");
    }


    feuxRouges--;
    console.log("Il reste " + feuxRouges + " feux rouges");
    
}


if(personnage.santeMentale > 0) {
    alert("Félicitation tu as survécu aux 30 feux rouges, tu as encore " + personnage.santeMentale + " points de santé mentale");
} else {
    alert("Tu as Explosé, tu as perdu toute ta santé mentale");
}