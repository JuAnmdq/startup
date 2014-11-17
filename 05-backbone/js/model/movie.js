define(['jquery', 'backbone'], function($, Backbone) {

  var Movie = Backbone.Model.extend({

    defaults: {
      title: '',
      genre: '',
      director: '',
      details: ''
    },
    initialize: function() {
      console.log('Movie object was created');
    } 
  });   
  return Movie;
}); 