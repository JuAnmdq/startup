!function(global) {
  'use strict';

(function($) {
  var o = $({});
  $.subscribe = function() {
  o.on.apply(o, arguments);
  };
  $.unsubscribe = function() {
  o.off.apply(o, arguments);
  };
  $.publish = function() {
  o.trigger.apply(o, arguments);
  };
}(jQuery));

var previousMovieObserver = global.MovieObserver;

var MovieObserver = function MovieObserver() {
  $.subscribe('play', function(data) {
  	console.log('Playing ' + data);
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




//var event = new Event('playing');

//$.suscribe('playing', this, function() {
  
/*movieObserver.prototype.constructor = movieObserver;

*/
  





