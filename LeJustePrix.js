// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
// Min : 0.00001 * 1000 = 0.1 = 0;
// Moy : 0.24 * 1000 = 240;
// Max : 0.9999 * 1000 = 999.9 = 999;
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {

    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire) {
        // Ajouter du contenu a l'element "#1 (4) = C'est plus !";
        instruction.textContent = '#' + coups + ' (' + nombre + ") C'est plus !";
        // Ajouter les classes instruction et plus "instruction plus"
        instruction.className = "instruction plus";
    } else if(nombre > nombreAleatoire) {
        // Ajouter du contenu a l'element "#1 (4) = C'est moins !";
        instruction.textContent = '#' + coups + ' (' + nombre + ") C'est moins !";
        // Ajouter les classes instruction et moins
        instruction.className = "instruction moins";
    } else {
        // Ajouter du contenu a l'element "#1 (4) = Félicications vous avez trouvé le juste prix !";
        instruction.textContent = '#' + coups + ' (' + nombre + ") Félicications vous avez trouvé le juste prix !";
        // Ajouter les classes instruction et fini
        instruction.className = "instruction fini";
        input.disabled = true;
    }

    // Ajout de l'élément devant les autres
    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
        // Afficher le message d'erreur
        error.style.display = "inline";
    } else {
        // Cacher le message d'erreur
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if(isNaN(input.value) || input.value == "") {
        // Mettre la bordure de formulaire en rouge
        input.style.borderColor = "red";
    } else {
        // Mettre la bordure de formulaire en gris (silver)
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

