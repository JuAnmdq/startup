/*var Movie = function Movie() {
  this.attributes = {
    title: '',	
    director:'',
    actors: []
  }   
}; 

Movie.prototype.constructor = Movie;

Movie.prototype.play = function play() {
  console.log('Playing ' + this.attributes.title + '...');
  //pub.publish('playing', this.attributes.add)
  //$.publish('playing',['play',this.attributes['title']]);
};

Movie.prototype.stop = function stop() {
  console.log(this.attributes['title']+' stopped.');
  //$.publish('stopped',['stop',this.attributes.title]);
  //$.publish('stopped','stop',this.attributes.title);
};

Movie.prototype.set = function set(attr, value) {
  this.attributes[attr] = value;
};

Movie.prototype.get = function get(attr) {
  return this.attributes[attr];
};

Movie.prototype.addActors = function addActors(val) {
  this.attributes.actors.push(val);
};

Movie.prototype.getActors = function getActors() {
  return this.attributes.actors;
};

Movie.prototype.showActors = function showActors() {
  console.log('Actors: ');

  $.each(this.getActors(), function(i, aux) {
    console.log(aux.getName());
  });
  
};*/
/*
var PubSub = function PubSub(){
};

PubSub.prototype.constructor = PubSub;

PubSub.prototype.publish = function(eventStr, data) {
  $.publish(event, data);
}

PubSub.prototype.suscribe = function(eventStr, callback) {
  $.suscribe(event, data);
}

var pub = new PubSub();

var DownloadableMovie = function() {
};

DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.constructor = DownloadableMovie;

DownloadableMovie.prototype.download = function() {
	console.log('Downloading ' + this.get('title') + '...');
}

var downloaded = new DownloadableMovie();

downloaded.set('title', 'Some Movie');

downloaded.download();*/

var Social = function() {};

  Social.prototype.constructor = Social;

  Social.prototype = {
    share: function(friendName) {
      console.log('Sharing' + this.get('title' + 'with' + friendName));
    },
    like: function() {
      console.log('like');
    } 
  };


var social = new Social();

var Actor = function Actor(name) {
  this.name = name
};

Actor.prototype.constructor = Actor;

Actor.prototype.Show = function Show() {
  console.log(this.name);
}

Actor.prototype.getName = function getName() {
  return this.name;
}

var terminator = new Movie();
    menOfHonor = new Movie();

terminator.set('title', 'Terminator');
menOfHonor.set('title', 'Men of Honor');
 
var francella = new Actor('Francella');
    alPacino = new Actor('Al Pacino');
    eddieMurphy = new Actor('Eddie Murphy');

terminator.addActors(francella);
terminator.addActors(alPacino);

terminator.play(); 
terminator.showActors();

menOfHonor.addActors(eddieMurphy);

menOfHonor.play();
menOfHonor.showActors();

menOfHonor.showActors();






