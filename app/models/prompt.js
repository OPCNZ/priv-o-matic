import DS from 'ember-data';

var Prompt = DS.Model.extend({
  blanks: DS.hasMany('blank'),  //e.g. we collect info about your _blank_
  response: DS.attr('string'), //what going in the blank, e.g. "location"
  stepNumber: DS.attr('integer') 
});

export default Prompt;
