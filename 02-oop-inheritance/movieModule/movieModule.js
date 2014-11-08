!function(global) {
  'use strict';

  var previousMovie = global.Movie;

  var Movie = function Movie() {
    this.attributes = {
      title: '',	
      actors: []
    }   
  }; 

  var previousMovieObserver = global.MovieObserver;

  Movie.prototype.constructor = Movie;

  Movie.prototype.play = function play() {
     $.publish('play', this.get('title'));
  };

  Movie.prototype.stop = function stop() {
    console.log(this.get('title') +' has stopped.');
  };

  Movie.prototype.set = function set(attr, val) {
    this.attributes[attr] = val;
  };

  Movie.prototype.get = function get(attr) {
    return this.attributes[attr];
  };

  Movie.prototype.addActors = function addActors(arg) {
    this.get('actors').push(arg);
  };

  Movie.prototype.showActors = function showActors() {
    console.log('Actors: ');
    $.each(this.get('actors'), function(i, aux) {
      console.log(aux.getName());
    });  
  };

var Social = function() {
	$.subscribe('click', function() {
		console.log('noth');
	})
};	

Social.prototype = {
  share: function (friendName) {
    console.log('Sharing ' + this.get('title') + ' with ' + friendName);
  },
  like: function() {
    console.log('You liked ' + this.get('title'));
  }
};

  function extend(destination, source) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        destination[prop] = source[prop];
      }
   }
  }

  extend(Movie.prototype, Social.prototype);

  Movie.noConflict = function noConflict() {
    global.Movie = previousMovie;
    return Movie;
  }
  global.Movie = Movie;
}(this);