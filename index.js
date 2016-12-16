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

function getNextEpisodeInPlaylist(playlist){
	return playlist[0];
}

function addToPlaylist(episodes, finaleEpisode){
	return episodes.concat(finaleEpisode);
}

function removeFromPlaylist(playlist, episode){
	var newPlaylist = playlist;
	newPlaylist = newPlaylist.filter(function(element){
		// console.log(element.id);
		// console.log(episode.id);
		// console.log(element.id !== episode.id)
    	return element.id !== episode.id;
	});
	// var index = playlist.indexOf(episode);
	// console.log(episode);
 //    if (index > -1) {
 //       newPlaylist.splice(index, 1);
 //    }
    console.log(newPlaylist);
    return newPlaylist;
}

function bingeWatch(list){
	if (list.length > 0){
		list = removeFromPlaylist(list, getNextEpisodeInPlaylist(list));
		bingeWatch(list);
	} else {
		return 0;
	};
	return "Please let there be more!";
	// while(list.length > 0){
	// 	list = removeFromPlaylist(list, getNextEpisodeInPlaylist(list));
	// 	console.log('Please let there be more!');
	// }
    //console.log(playlist);
}