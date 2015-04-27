import DS from 'ember-data';

var Step = DS.Model.extend({
  	content: DS.attr('string'),
});


Step.reopenClass({
	FIXTURES: [
	{	id: 1, 
		'content': "My business is called %businessName, and we are\n \
		located at %location. \n \
		Our contact email is %email\n \
		And our phone number is %phone-number\n \
		"
	},
	{	id: 2,
		'content': 'in step two i want to ask, what else do we need to know? How will the weather be tomorrow? %weather'
	}
	]
});

export default Step;