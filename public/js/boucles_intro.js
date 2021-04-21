let tableau = ["voiture", "chien", "alexis", "vous m'entendez", "dorian"];
//boucle for
for (let i = 2; i < tableau.length; i = i+2) {
    console.log(tableau[i]);
}

for (let i = 0; i <= 20; i++) {
    console.log(i);
}
//boucle foreach
tableau.forEach(e => {
    console.log(e);
});

tableau.forEach((element, i, tableau)  => {
    console.log(i + ": " + " " + element);
});