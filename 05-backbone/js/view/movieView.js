define(['jquery', 'underscore', 'backbone', 'movie', 'movieDetails', 'movieCollection'], 
	function($, _, Backbone, Movie, MovieDetails, MovieCollection) {

  var movieCollection = new MovieCollection();
  
  var MovieView = Backbone.View.extend( {
    
    el: $('body'),
    events: {
      'click #btnAdd': 'add',
      'click #remove': 'remove',
      'click #edit': 'edit',
      'click #btnClearAll': 'clearAll'
    },
  	initialize : function() {
  	  console.log('View already works');
      
      movieCollection.fetch();
      movieCollection.toJSON();
  	  this.render();
  	},
  	render: function() {
  	  var list = localStorage.getItem('movieStorage');
      var col = movieCollection.toJSON();
  	  for(var i = 0; i < col.length; i++) {
        var template = _.template($("#src-underscore").html() + 
          '<div class="btnMod"><button id="remove">Remove</button><button id="edit">Edit</button></div>', col[i]);
          this.$el.append(template);
      }
  	},
  	
  	add: function() {
      var movie = new Movie({title: $('#title').val(), genre: $('#genre').val(), director: $('#director').val(), details: $('#details').val()});
  	  movieCollection.add(movie);    
      movie.save(movie.title); 
      location.reload();
  	},
  	remove: function() {
      console.log(movieCollection.toJSON());
      //localStorage.removeItem('');
  	},
  	edit: function() {
  	},
    clearAll: function() {
      localStorage.clear();
      location.reload();
    }
  });
  return MovieView;
});