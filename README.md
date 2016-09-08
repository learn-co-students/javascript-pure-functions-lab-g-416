# JavaScript Pure Functions Lab

## Overview

In ths lab, you'll write non-side-effecting functions and you'll chain updates without mutating global state. 

## Late to the party

Let's pretend we've been living under a rock for the last couple of months, and haven't been keeping up with the latest
TV shows. Our friend tells us that the latest season of Game of Thrones has been released for quite some time now. _Why
were we not informed of this sooner?!_ It's time for some good 'ol binge watching!

![Tyrion dancing](https://media.giphy.com/media/11clOWGCHzWG7C/giphy.gif)

In the `index.js` file, there is a list of episodes, as well as the finale episode in a separate variable. Your tasks
for this lab are as follows:

1. Create a `addToPlaylist()` function that takes a playlist and an episode as arguments, and returns a new array with
the episode appended to the playlist. This function **must not modify** the original array! This function is used to
create a playlist that also contains the finale episode.

2. Create a `removeFromPlaylist()` function that takes a playlist and an episode, and returns a new array with that
episode removed from the array. This function must also **not modify** the original array.

3. Create a `getNextEpisodeInPlaylist()` function that returns the first episode in a playlist.

4. Finally, to tie it all together, create a function called `bingeWatch()` that takes a playlist as its only argument.
This function recursively calls itself: as long as there is a next episode, we watch it (by removing it from the
playlist), and then we continue our binge watching session. If there are no more episodes in the playlist, we return the
string `'Please let there be more!'`. Sadly for us, there aren't any more episodes in this season. _Such_ a long wait.

**NOTE**: Unfortunately, due to JavaScript quirks, you'll need to
write `bingeWatch()` with `function` syntax for the tests to pass:

```javascript
function bingeWatch() { ... }
```

In the "real world," using an arrow function would be fine —

```javascript
const bingeWatch = () => { ... }
```

— but it won't work here.


## Resources
- [Eloquent JavaScript: Functions](http://eloquentjavascript.net/1st_edition/chapter3.html)
