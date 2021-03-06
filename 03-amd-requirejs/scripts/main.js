require.config( {
    baseUrl: "scripts",
    paths: {
	  jquery: "jquery-2.1.1.min",
	  movie: "movie/movie",
	  director: "director/director"
    },
	shim: {
	  jquery: "$"
	}   
});

require(['jquery', 'movie', 'director'], function($, Movie, Director) {
  
  $(document).ready(function() {
  	$('#btnPlay').click(function() {
  		var alien = new Movie('Alien');

	  	ridleyScott = new Director('Ridley Scott');
  		alien.set('director', ridleyScott);
 		  ridleyScott.set('quotes', ['Cast is everything', ' Do what...']);

      $('#content-quotes').html(alien.get('director').speak());
      $('#content-quotes').show('slow');
 	 });
  });
});