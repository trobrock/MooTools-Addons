/*
---
description: Some simple addons to the Array class

license: MIT-style

authors:
- Trae Robrock

requires:

provides: [Array.detect]

...
*/

Array.implement({

  detect: function(fn, bind) {
    for (var i = 0, l = this.length; i < l; i++){
      if (i in this) {
        if (fn.call(bind, this[i], i, this)) { return this[i]; }
      }
    }
    return null;
  },

  select: function(fn, bind) {
    return this.filter(fn, bind);
  },

  reject: function(fn, bind) {
    return this.filter(function(i){ return !fn.call(bind, i); });
  }

});
