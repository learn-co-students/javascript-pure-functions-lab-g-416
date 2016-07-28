# JavaScript Pure Functions Lab

## Objectives

1. Practice writing non-side-effecting functions
2. Practice chaining updates without mutating global state

## Overview

In some ways, this lab will pick up where https://github.com/learn-co-curriculum/javascript-objects-lab
left off. But we don't need to spend any time on destructive updates, and we
generally want this lab to be a bit harder than the previous one.

We can start students off with simple updates: adding elements to arrays and
objects. Ideally, we will build them up to writing a function that combines
all of these smaller manipulations that they've written.

For example, let's say students are building a Netflix clone. We have accounts,
watch lists, and movies, and we can manipulate watch lists, watch movies, etc.

```javascript
function addToWatchList(watchList, movie) {
  return [...watchList, movie]
}

function removeFromWatchList(watchList, title) {
  const i = watchList.findIndex(m => m.title === title)

  return [...watchList.slice(0, i), ...watchList.slice(i + 1)]
}

function watchMedia(watchList, title) {
  if (title) {
    return watchList.find(m => m.title === title)
  }

  return watchList[0]
}
```

Then students can chain all of this stuff together:

```javascript
function netflixAndChill(watchList) {
  if (watchList.length) {
    const watched = watchMovie(watchList)

    return netflixAndChill(removeFromWatchList(watchList, watched))
  }

  return "No more movies to watch!"
}
```

Hopefully we can come up with a more thrilling example :)

## Resources

- [Eloquent JavaScript: Functions](http://eloquentjavascript.net/1st_edition/chapter3.html)
