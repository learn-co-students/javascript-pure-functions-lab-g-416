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


// const addToPlaylist = (episodes, episode) => { 
//   [...episodes, episode]
// }

// const removeFromPlaylist = (episodes, episode) => episodes.filter(e => e.id !== episode.id)
// // Create a getNextEpisodeInPlaylist() function that returns the first episode in a playlist.

// const genNextEpisodeInPlaylist = (episode) => {
//    episode[0]

// }

// // Finally, to tie it all together, create a function called bingeWatch() that takes a playlist as its only argument. This function recursively calls itself: as long as there is a next episode, we watch it (by removing it from the playlist), and then we continue our binge watching session. If there are no more episodes in the playlist, we return the string 'Please let there be more!'. Sadly for us, there aren't any more episodes in this season. Such a long wait.

// function bingeWatch(episode) {
//   if (episode.length ===0 ){
//     return 'Please let there be more!';
//   }
//   const nextEpisode = genNextEpisodeInPlaylist(episode);
  
//   return bingeWatch(removeFromPlaylist(episode, nextEpisode));
// }
// NOTE: Unfortunately, due to JavaScript quirks, you'll need to write bingeWatch() with function syntax for the tests to pass:

const addToPlaylist = (playlist, episode) => [...playlist, episode];
const removeFromPlaylist = (playlist, episode) => playlist.filter(e => e.id !== episode.id);
const getNextEpisodeInPlaylist = playlist => playlist[0];

function bingeWatch(playlist) {
  if (playlist.length === 0) {
    return 'Please let there be more!';
  }

  const nextEpisode = getNextEpisodeInPlaylist(playlist);
  return bingeWatch(removeFromPlaylist(playlist, nextEpisode));
};