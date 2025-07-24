nom = prompt("Saisissez votre nom");
prénom = prompt("Saisissez votre prénom");
alert(prénom);
alert(nom);
console.log(nom, prénom);

// Calculer la somme des deux nombres
let z = prompt("Saisie un premier nombre :"); // Saisie du premier nombre//
let b = prompt("Saisie un deuxième nombre :"); // Saisie du deuxième nombre//
let R; // Variable du Résultat//
R = parseInt(z) + parseInt(b); // Résultat de la valeur de z plus la valeur de b//
alert("le resultat est de : " + R + "Pommes"); // Afiche dans un message d'alerte avec le  résultat du calcul//
console.log(z, b, R);

// Convertir un chifre degrés clesius en degrés Fahrenheit//

let C = prompt("Saisie un chiffre en °C :"); // Saisie d'un chifre en Degrés Celsius//
let F = (C * 9) / 5 + 32; // Fait le calcul du chifre en degrés celsious + (C * 9) / 5 + 32 pour le convertir en Fahrenheit//
alert("le resultat est de : " + F + "°F"); // Affiche un message d'alerte avec le résultat en Fahrenheit
console.log(F, C);
// Afficher la Température de Degrés celcius en degrés de température Fahreinheit//

let T = prompt("Saisie la température en °C"); //Saisie De la température en Degrés celsius//
T = parseInt(R) + F; // Fait le calcul de la valeur de Température en degrés celsius en degrés de température Fahreinheit//
alert("le resultat est de : " + T + " °F en Température"); // Affiche un message d'alerte avec le résultat en degrés de température en  Fahrenheit//
//Affichez "Ceci est une chaîne de caractères :" et concaténez la  chaîne avec la variable a pour afficher "Ceci est une chaîne de caractères : 100".//
let chaine = "Ceci est une chaîne de caractères :";
a = 100;
c = 1.0 + a;
let nouvelechaine = chaine + a;
alert(nouvelechaine);
