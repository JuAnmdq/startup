define(['jquery', 'underscore', 'backbone', 'movie', 'movieCollection'], 
	function($, _, Backbone, Movie, MovieCollection) {
  
  var movieCollection = new MovieCollection();

  var MovieDetails = Backbone.View.extend( {
  	el: 'body',

    initialize: function() {
  	  console.log('Movie Details view is working...');
  	  this.render();
    },
    render: function() {
      var list = parse (localStorage.getItem('movieStorage'));
      for(var i = 0; i < list.length; i++) {
      	var template = _.template($("#src-details").html(), list[i]);
  	    this.$el.append(template);	
      }
    } 
  });
  var movieDetails = new MovieDetails();
});