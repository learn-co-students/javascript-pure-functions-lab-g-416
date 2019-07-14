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
  return playlist.concat(episode)
}

function removeFromPlaylist(playlist, episode) {
  let newPlaylist = [...playlist];
  let ind = newPlaylist.findIndex(ep => ep.id === episode.id);
  newPlaylist.splice(ind, 1);
  return newPlaylist;
}

function getNextEpisodeInPlaylist(playlist) {
  return playlist[0];
}

function bingeWatch(playlist) {
  let firstEpisode;
  let newPlaylist = [...playlist];
  while (newPlaylist.length > 0) {

    firstEpisode = getNextEpisodeInPlaylist(newPlaylist);
    let ind = newPlaylist.findIndex(ep => ep.id === firstEpisode.id);
    newPlaylist.splice(ind, 1);
    return bingeWatch(newPlaylist)
  }
  return 'Please let there be more!';
}
