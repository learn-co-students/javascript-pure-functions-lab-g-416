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

function addToPlaylist(playlist, episode) {
  return [...playlist, episode];
}

function removeFromPlaylist(playlist, episode) {
  return playlist.filter(elem => elem.id !== episode.id);
}

function getNextEpisodeInPlaylist(playlist) {
  return Object.assign({}, playlist[0]);
}

function bingeWatch(playlist) {
  for (let i = 0; i < playlist.length; i++) {
    [...playlist.splice(0, 1)]
    return bingeWatch(playlist);
  }
  return 'Please let there be more!';
}
 
