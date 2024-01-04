const playlist = [
  "Court and Spark - Joni Mitchell",
  "Big Yellow Taxi - Joni Mitchell",
  "Court and Spark - Joni Mitchell",
];

var listNoRepeat = removeDuplicates(playlist);
console.log(listNoRepeat);

function removeDuplicates(playlist) {
  const conjuntoSinDuplicados = new Set(playlist);
  const listaSinDuplicados = [...conjuntoSinDuplicados];
  return listaSinDuplicados;
}
