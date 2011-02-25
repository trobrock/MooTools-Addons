/*
---
description: Some simple addons to the Array class

license: MIT-style

authors:
- Trae Robrock

requires:

provides: [Array.shuffle]

...
*/

Array.implement({

  /**
   * This will shuffle an Array randomly
   * Updated this to run faster, thanks to arian (http://github.com/arian) for this
   * It also looks like MooTools Array.Extras v1.3 will have this method, so I will remove this at its release
   *
   * Usage:
   *   Array.shuffle();
   * Returns:
   *   Array
   **/
   shuffle: function(){
      for (var i = this.length; i && --i;){
        var temp = this[i], r = Math.floor(Math.random() * ( i + 1 ));
        this[i] = this[r];
        this[r] = temp;
      }
      return this;
    }
});
