!function(global) {
  'use strict';

var previousMovieObserver = global.MovieObserver;

var MovieObserver = function MovieObserver() {
  $.subscribe('play', function(e, data) {
  	console.log('Playing ' + data);
  });
  $.subscribe('stop', function(e, data) {
  	console.log(data + ' has stopped.')
  });
}

MovieObserver.prototype.constructor = MovieObserver;

MovieObserver.prototype.roof = function roof() {
  
}; 

MovieObserver.noConflict = function noConflict() {
  global.MovieObserver = previousMovieObserver;
  return MovieObserver;
}
  global.MovieObserver = MovieObserver;
}(this);




