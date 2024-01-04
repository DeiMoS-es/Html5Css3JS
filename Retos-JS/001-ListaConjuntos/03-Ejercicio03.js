const playlist = ['Selma - Bijelo Dugme'];

// addTrack(playlist, 'Atomic Dog - George Clinton');
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
console.log(addTrack(playlist, 'Atomic Dog - George Clinton'));
// addTrack(playlist, 'Selma - Bijelo Dugme');
console.log(addTrack(playlist, 'Selma - Bijelo Dugme'));
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
function addTrack(playlist, cancion){
  if(!playlist.includes(cancion)){
    playlist.push(cancion);
  }
  return playlist;
}