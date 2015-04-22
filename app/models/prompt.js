import DS from 'ember-data';

var Prompt = DS.Model.extend({
  content: DS.attr('string'),
  blanks: DS.hasMany('blank'),  //e.g. we collect info about your _blank_
  response: DS.attr('string'), //what going in the blank, e.g. "location"
  step: DS.attr('integer') 
});

Prompt.reopenClass({
  FIXTURES: [
  {'id': 1, 'step': 1, 'content': 'My business is called'}
  ]
});

export default Prompt;
