define(['director'], function(Director) {
  var Movie = function Movie() {

    this.director;

    Movie.prototype.constructor = Movie;

    Movie.prototype.get = function get(attr) {
      return this[attr];
    };
    Movie.prototype.set = function set(attr, val) {
      this[attr] = val;
    }
  };
  return Movie;
}); 