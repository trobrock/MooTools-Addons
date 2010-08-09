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
	 * 
	 * Usage:
	 *   Array.shuffle();
	 * Returns:
	 *   Array
	 **/
	shuffle: function() {
		for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
		return this;
	}
});