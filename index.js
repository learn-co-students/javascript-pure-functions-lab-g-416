const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function addToPlaylist(playlist,episode){
  let newObject=Object.assign({},playlist,episode)
  return newObject;

}

function removeFromPlaylist(playlist,episode){
  let newObject=Object.assign({},playlist)
  delete newObject[episode]
  return newObject;
}

function getNextEpisodeInPlaylist(playlist){
  return playlist[0]
}


function bingeWatch(playlist){
  console.log(playlist)
  if (playlist.length===0){
    return 'Please let there be more!'
  }
  else {
    playlist.shift()
  }
  bingeWatch(playlist)
}
