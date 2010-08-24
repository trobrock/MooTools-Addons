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