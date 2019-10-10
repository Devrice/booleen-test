var tableau = [["vrai", "vrai"], ["faux", "vrai"], ["vrai", "faux"]];

let container = document.getElementsByClassName("container")[0];

let vertical;

tableau.map(colonne => {
  vertical = document.createElement("div");
  vertical.classList.add("vertical");
  colonne.map(ligne => {
    let pixel = document.createElement("div");

    if (ligne == "vrai") pixel.classList.add("blanc");
    else pixel.classList.add("black");

    vertical.append(pixel);
  });
  container.append(vertical);
});
let zigzag = [
  [false, true],
  [true, false],
  [false, true],
  [true, false],
  [true, false]
];
let pixelenBasADroite = zigzag[3][1];
console.log(zigzag[3]);

function largeurImage(zigzag) {
  return zigzag.length;
}

function hauteurImage(zigzag) {
  return zigzag[0].length;
}

let hauteur = hauteurImage(zigzag);
console.log(hauteur);

//var faux = document.getElementsByClassName("blackbox");
//var vrai = document.getElementsByClassName("whitebox");

let largeur = largeurImage(zigzag);
console.log(largeur);

function compteBlancsColonne(col) {
  let i = 0;
  col.map(pixel => {
    if (pixel == "vrai") {
      i++;
    }
  });
  return i;
}

function compteNoirsColonne(col) {}

let tutu = ["faux", "vrai"];

let nb_blanc = compteBlancsColonne(tutu);
console.log(nb_blanc);
