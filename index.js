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

var addToPlaylist = function (playlist, episode) {
  const newPlaylist = Object.assign([], playlist);
  newPlaylist.push(episode);
  return newPlaylist;
};

var removeFromPlaylist = function (playlist, episode) {
  const newPlaylist = Object.assign([], playlist);
  return newPlaylist.filter(function(epi) {
    return epi !== episode;
  });
}

var getNextEpisodeInPlaylist = function (playlist) {
  return playlist[0];
}

function bingeWatch(episodes) {
  if (episodes.length === 0) {
    return 'Please let there be more!'
  } else {
    const nextEpisode = getNextEpisodeInPlaylist(episodes);
    if (nextEpisode) {
      const newPlaylist = removeFromPlaylist(episodes, nextEpisode);
      return bingeWatch(newPlaylist);
    }
  }
}
