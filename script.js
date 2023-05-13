const alterarTom = function (intervalo) {
  const chords = document.getElementsByClassName("fciXY _Oy28");
  majorChordsWithSharp = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  minorChordsWithSharp = [
    "Cm",
    "C#m",
    "Dm",
    "D#m",
    "Em",
    "Fm",
    "F#m",
    "Gm",
    "G#m",
    "Am",
    "A#m",
    "Bm",
  ];
  arrayChords = Array.from(chords).forEach(function (curr, i, arr) {
    //   chords[i].setAttribute("data-name", "A");
    acorde = chords[i].textContent;
    if (acorde && acorde.includes("m")) {
      let index = minorChordsWithSharp.indexOf(acorde);
      alteraAcorde(index, intervalo, minorChordsWithSharp);
      chords[i].textContent = alteraAcorde(
        index,
        intervalo,
        minorChordsWithSharp
      );
    } else if (acorde) {
      let index = majorChordsWithSharp.indexOf(acorde);
      chords[i].textContent = alteraAcorde(
        index,
        intervalo,
        majorChordsWithSharp
      );
    }
  });
};
const alteraAcorde = function (indice, intervalo, lista) {
  if (intervalo + indice >= 12) {
    return lista[intervalo + (indice - 12)];
  } else {
    return lista[intervalo + indice];
  }
};

const tom = Number(prompt("Quer subir o tom em quantos semitons?"));
alterarTom(tom);
