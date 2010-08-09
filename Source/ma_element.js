/*
---
description: Some simple addons to the Element class

license: MIT-style

authors:
- Trae Robrock

requires:
- core/1.2.4:*
- more/1.2.4.4:Element.Shortcuts

provides: [Element.grabs, Element.isNotVisible]

...
*/

Element.implement({
	
	/**
	 * This works just like Element.grab, but will optionally accept an array of elements to be inserted
	 * 
	 * Usage:
	 *   Element.grabs(element); or Element.grabs([elementOne, elementTwo]);
	 **/
	grabs : function(elements){
		if ($type(elements) == "array") {
			elements.each(function(element){
				this.grab(element);
			}.bind(this));
		}
		else {
			this.grab(elements);
		}
	},

	/**
	 * This is a convienience method for Element.isVisible and makes code readability better
	 * 
	 * Usage:
	 *   Element.isNotVisible();
	 * Returns:
	 *   true or false
	 **/
	isNotVisible : function(){
		return !this.isVisible();
	},
});