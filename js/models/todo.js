/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			priority: false,
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				title: this.get('title'),
				completed: !this.get('completed')
			});
		},

		// Toggle the 'priority' state of the todo item
		togglePriority: function () {
			console.log('model.togglePriority:',this.get('priority'))
			this.save({
				priority: !this.get('priority')
			});
		}
	});
})();
