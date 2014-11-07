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

//Tome esta función de Learning JavaSript Design Patterns

function augment( receivingClass, givingClass ) {
 
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
 
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
 
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //  receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}
  augment(Movie, Social);

  Movie.noConflict = function noConflict() {
    global.Movie = previousMovie;
    return Movie;
  }
  global.Movie = Movie;
}(this);


/*
The module should start with a !. This ensures that if a malformed module forgets to include a final semicolon there aren't errors in production when the scripts get concatenated.
The file should be named with camelCase, live in a folder with the same name, and match the name of the single export.
Add a method called noConflict() that sets the exported module to the previous version and returns this one.

Always declare 'use strict'; at the top of the module.

// fancyInput/fancyInput.js

!function(global) {
  'use strict';

  var previousFancyInput = global.FancyInput;

  function FancyInput(options) {
    this.options = options || {};
  }

  FancyInput.noConflict = function noConflict() {
    global.FancyInput = previousFancyInput;
    return FancyInput;
  };

  global.FancyInput = FancyInput;
}(this);
*/