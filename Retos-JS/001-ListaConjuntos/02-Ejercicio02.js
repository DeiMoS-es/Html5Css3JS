const playlist = [
  "The Fashion Show - Grace Jones",
  "Dr. Funkenstein - Parliament",
];

//   hasTrack(playlist, 'Dr. Funkenstein - Parliament');
console.log(hasTrack(playlist, "Dr. Funkenstein - Parliament"));

//   hasTrack(playlist, 'Walking in the Rain - Grace Jones');
console.log(hasTrack(playlist, "Walking in the Rain - Grace Jones"));

function hasTrack(playlist, cancion) {
  const playlistSet = new Set(playlist);
  return playlistSet.has(cancion);
}
