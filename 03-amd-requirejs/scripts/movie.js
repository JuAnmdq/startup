define(
  [
    'director'
  ],



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
     console.log('Playing ' + this.get('title') + '...');
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

  Movie.prototype.test = function test() {
    console.log('Testing');
  }
  return Movie;
);