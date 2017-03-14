/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

//  écrire votre code sous ce commentaire
function shoppingList(panier) {

    let fruit = [];
    let orange = 0;
    let kiwi = 0;
    let ananas = 0;
    let prune = 0;
    let banane = 0;
    let pamplemousse = 0;

    for (t = 0; t < panier.length; t++) {

        panierception = panier[t];

        for (i = 0; i < panierception.length; i++) {
            if (panierception[i] == "orange") {
                orange++;
            } else if (panierception[i] == "kiwi") {
                kiwi++;
            } else if (panierception[i] == "ananas") {
                ananas++;
            } else if (panierception[i] == "prune") {
                prune++;
            } else if (panierception[i] == "banane") {
                banane++;
            } else if (panierception[i] == "pamplemousse") {
                pamplemousse++;
            }

        }
    }
    return {
        orange: orange,
        kiwi: kiwi,
        ananas: ananas,
        prune: prune,
        banane: banane,
        pamplemousse: pamplemousse
    }


} console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));