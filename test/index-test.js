describe('Pure functions', function() {
  describe('getNextEpisodeInPlaylist()', function () {
    it('should return the next episode in a playlist', function() {
      const nextEpisode = getNextEpisodeInPlaylist(episodes);
      expect(nextEpisode).toEqual(episodes[0]);
    });
  });

  describe('addToPlaylist()', function () {
    it('should add a given episode to a given playlist', function() {
      const updatedPlaylist = addToPlaylist(episodes, finaleEpisode);
      expect(updatedPlaylist.length).toEqual(episodes.length + 1);
    });

    it('should not modify the original episodes array', function() {
      addToPlaylist(episodes, finaleEpisode);
      expect(episodes.length).toEqual(9);
    });
  });

  describe('removeFromPlaylist()', function () {
    it('should remove a given episode from a given playlist', function() {
      const updatedPlaylist = removeFromPlaylist(episodes, episodes[0]);
      expect(updatedPlaylist.length).toEqual(episodes.length - 1);
    });

    it('should not modify the original episodes array', function() {
      removeFromPlaylist(episodes, episodes[0]);
      expect(episodes.length).toEqual(9);
    });
  });

  describe('bingeWatch()', function () {
    it('should watch all 10 episodes', function() {
      const updatedPlaylist = addToPlaylist(episodes, finaleEpisode);
      const spy = sinon.spy(window, 'bingeWatch')
      const result = window.bingeWatch(updatedPlaylist);
      expect(spy.callCount).toEqual(11);
      expect(result).toEqual('Please let there be more!');
    });
  });
});
