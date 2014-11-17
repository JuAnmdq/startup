define(['jquery', 'underscore', 'backbone', 'movie', 'localStorage'], function($, _, Backbone, Movie, localStorage) {
  
  var MovieCollection = Backbone.Collection.extend( {
    model: Movie,
    localStorage: new Backbone.LocalStorage('movieStorage')
  });
  return MovieCollection;
});