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
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				title: this.get('title'),
				completed: !this.get('completed')
			});

/*		//not the best way to do this... should be done in the template... but works
			var strDone = ' -- done',
					strTitle = this.get('title'),
					bCompleted = !this.get('completed');

			strTitle = bCompleted ? strTitle + strDone : strTitle.slice(0, strTitle.indexOf(strDone));

			this.save({
				title: strTitle, //this.get('title')),
				completed: bCompleted //!this.get('completed')
			});
*/
		}
	});
})();
