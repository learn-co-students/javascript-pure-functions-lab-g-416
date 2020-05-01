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

// Create a addToPlaylist() function that takes a playlist and an episode as arguments, and returns a new array with the episode appended to the playlist. This function must not modify the original array! This function is used to create a playlist that also contains the finale episode.


const addToPlaylist = (episodes, finalEpisode) => [...episodes, finalEpisode]

// Create a removeFromPlaylist() function that takes a playlist and an episode, and returns a new array with that episode removed from the array. This function must also not modify the original array.

const removeFromPlaylist = (episodes, episode) => episodes.filter( e => e.id !== episode.id)
  

// Create a getNextEpisodeInPlaylist() function that returns the first episode in a playlist.

const getNextEpisodeInPlaylist = episodes => episodes[0]


// Finally, to tie it all together, create a function called bingeWatch() that takes a playlist as its only argument. This function recursively calls itself: as long as there is a next episode, we watch it (by removing it from the playlist), and then we continue our binge watching session. If there are no more episodes in the playlist, we return the string 'Please let there be more!'. Sadly for us, there aren't any more episodes in this season. Such a long wait.

function bingeWatch(episodes) {
    if (episodes.length === 0) {
      return 'Please let there be more!'
    }
    const next = getNextEpisodeInPlaylist(episodes)
    return bingeWatch(removeFromPlaylist(episodes, next))
}
