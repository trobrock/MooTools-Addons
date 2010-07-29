(function($){
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
})(document.id)