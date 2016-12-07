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

const addToPlaylist = (list, episode) => list.concat(episode);

const removeFromPlaylist = function(list, episode){
  var tempList = Object.assign([], list).filter(function(ep){
    return ep.id !== episode.id;
  });
  return tempList;
}

const getNextEpisodeInPlaylist = list => list[0];

function bingeWatch(list){
  var tempList = Object.assign([], list);
  if (tempList.length > 0){
    bingeWatch(removeFromPlaylist(tempList, tempList[0]));
  }
  return 'Please let there be more!';
}

console.log(bingeWatch(episodes));
