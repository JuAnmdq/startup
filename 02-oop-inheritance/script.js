/*  var previousMovie = global.Movie;

  var Movie = function Movie() {
    this.attributes = {
      title: '',  
      actors: []
    }   
  }; 
  
  Movie.prototype.constructor = Movie;

  Movie.prototype.play = function play() {
    console.log('Playing ' + this.get('title') + '...');
    //$.publish('play', this.get('title'));
  };

  Movie.prototype.stop = function stop() {
    console.log(this.get('title') +' has stopped.');
    //$.publish('stop', this.get('title'));
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
*/

var terminator = new Movie();
    menOfHonor = new Movie();

terminator.set('title', 'Terminator');
menOfHonor.set('title', 'Men of Honor');
 
var francella = new Actor('Francella');
    alPacino = new Actor('Al Pacino');
    eddieMurphy = new Actor('Eddie Murphy');

terminator.addActors(francella);
terminator.addActors(alPacino);
menOfHonor.addActors(eddieMurphy);

var downloaded = new DownloadableMovie();
downloaded.set('title', 'Inherit Movie');

//augment(Movie, social);

var ed = new MovieObserver();

$(document).ready(function() {

  $('#btnPlay').click(function() {
    terminator.showActors();
    terminator.play();
  });
  $('#btnStop').click(function() {
    terminator.stop();
  });
  $('#btnDownload').click(function() {
    downloaded.download(); 
  });
  $('#btnShare').click(function() {
    terminator.share('V. Rivas');
  });
  $('#btnLike').click(function() {
    terminator.like();
  });
});







