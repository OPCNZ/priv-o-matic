import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		nextStep: function () {
			console.log("Next step");
			alert("next step");
		}
	}
});
