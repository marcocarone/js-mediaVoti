// è richiesto di inserire tre voti, con questi si farà la somma e successivamente la media. infine si controllerà se la media è maggiore o minore di 6 dando i relativi output


for (var i = 1; i <= 3; i++) {
  var votiInput = parseInt(prompt("Inserisci il voto"));
  while (isNaN(votiInput)) {
    votiInput = parseInt(prompt("Inserisci il voto"));
  }
  var somma = 0;
  somma += votiInput;
  console.log(somma);
  var media = somma / i;
  console.log(media);
}
var risultato = "la media dei voti è minore di 6";
if (media < 6) {
  document.getElementById("azione").innerHTML = risultato;
} else if (media == 6) {
  risultato = "la media dei voti è uguale a 6";
  document.getElementById("azione").innerHTML = risultato;
} else {
  risultato = "la media dei voti è maggiore di 6";
  document.getElementById("azione").innerHTML = risultato;
}
