!function(global) {
  'use strict';

var previousSocial = global.Social;

  var Social = function() {};	

  Social.prototype = {
    share: function (friendName) {
      console.log('Sharing' + this.get('title') + 'with' + friendName);
    },
    like: function() {
      console.log('like');
    }
  };

function augment( receivingClass, givingClass ) {
 
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
 
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
 
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //  receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

Social.noConflict = function noConflict() {
  global.Social = previousSocial;
  return Social;
}
  global.Social = Social;
}(this);