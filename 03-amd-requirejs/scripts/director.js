define(function() {

  var Director = function Director(name) {

    this.name = name;
    this.quotes = [];

    Director.prototype.constructor = Director;

    Director.prototype.set = function set(attr, val) {
      this[attr].push(val);
    }

    Director.prototype.get = function get(attr) {
      return this[attr];
    }

    Director.prototype.speak = function speak() {
      return this.name + ' says: ' + this.quotes.join();
    }

  };

  return Director;

});
  
  



