(function($){
	Array.implement({
		shuffle: function() {
			for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
			return this;
		}
	});

	Element.implement({
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

		isNotVisible : function(){
			return !this.isVisible();
		},
	});
})(document.id)