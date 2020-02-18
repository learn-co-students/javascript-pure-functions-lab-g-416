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


// function getNextEpisodeInPlaylist(playlist) {
//   return playlist[0]
// }
//
// function addToPlaylist(playlist, episode) {
//   let newPlaylist = Object.assign([], playlist, episode)
//   return newPlaylist
// }
//
// function removeFromPlaylist(playlist, episode) {
//   let newPlaylist = playlist.filter(epi => epi.id !== episode.id)
//   return newPlaylist
// }

// function bingeWatch(playlist) {
//   let nextEpisode = getNextEpisodeInPlaylist(playlist)
//   let newPlaylist = removeFromPlaylist(playlist, nextEpisode)
//   if (playlist.length > 0) {
//     return bingeWatch(newPlaylist)
//   } else {
//     return "Please let there be more!"
//   }
// }

const addToPlaylist = (playlist, episode) => [...playlist, episode];
const removeFromPlaylist = (playlist, episode) => playlist.filter(e => e.id !== episode.id);
const getNextEpisodeInPlaylist = playlist => playlist[0];

// :( We need to use `function` so that we can spy on
// it. This is bad testing practice in the real world,
// but maybe it's okay in the contrived world of Learn?
// In the real world, `const bingeWatch = playlist => { ... }`
// is just fine.
function bingeWatch(playlist) {
  if (playlist.length === 0) {
    return 'Please let there be more!';
  }

  const nextEpisode = getNextEpisodeInPlaylist(playlist);
  return bingeWatch(removeFromPlaylist(playlist, nextEpisode));
};
