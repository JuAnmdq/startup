!function(global) {
  'use strict';

var previousDownloadableMovie = global.DownloadableMovie;

var DownloadableMovie = function DownloadableMovie() {};

DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.constructor = DownloadableMovie;

DownloadableMovie.prototype.download = function() {
	console.log('Downloading ' + this.get('title') + '...');
}

DownloadableMovie.noConflict = function noConflict() {
  global.DownloadableMovie = previousDownloadableMovie;
  return DownloadableMovie;
}
  global.DownloadableMovie = DownloadableMovie;
}(this);