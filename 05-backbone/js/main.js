require.config({

  paths: {
  	jquery: 'libs/jquery-2.1.1.min',
  	underscore: 'libs/underscore-min',
  	backbone: 'libs/backbone',	
    localStorage: 'libs/backbone.localStorage',
  	movie: 'model/movie',
    movieView: 'view/movieView',
    movieDetails: 'view/movieDetails',
    movieCollection: 'collection/movieCollection',
  },
  shim: {
    underscore: {
  	exports: '_'
  	},
    backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    }
  }  
});

require(['jquery', 'underscore', 'backbone', 'movie', 'movieView', 'movieDetails','movieCollection', 'localStorage'], 
	function($, _, Backbone, Movie, MovieView, MovieDetails, MovieCollection, LocalStorage) {
    var movieView = new MovieView();
    

});