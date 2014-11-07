!function(global) {
  'use strict';

var previousActor = global.Actor;

var Actor = function Actor(name) {
  this.name = name
};

Actor.prototype.constructor = Actor;

Actor.prototype.Show = function Show() {
  console.log(this.name);
}

Actor.prototype.getName = function getName() {
  return this.name;
}

Actor.noConflict = function noConflict() {
  global.Actor = previousActor;
  return Actor;
}
  global.Actor = Actor;
}(this);

