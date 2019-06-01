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
  const updatedPlaylist = [...playlist, episode]
  return updatedPlaylist
}
//arrow function alternative: 
//const addToPlaylist = (playlist, episode) => [...playlist, episode]

function removeFromPlaylist(playlist, episode){
  const newPlaylist = playlist.filter(e => e.id !== episode.id)
  return newPlaylist
}
//arrow function alternative:
//const removeFromPlaylist = (playlist, episode) => playlist.filter(e => e.id !== episode.id);

const getNextEpisodeInPlaylist = playlist => playlist[0]

//recursive
function bingeWatch(playlist) {
  if(playlist.length === 0){
    return 'Please let there be more!'
  }
  //get next episode and removefromplaylist
  const nextEp = getNextEpisodeInPlaylist(playlist)
  return bingeWatch(removeFromPlaylist(playlist, nextEp));
}