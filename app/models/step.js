import DS from 'ember-data';

var Step = DS.Model.extend({
  content: DS.attr('string'),
  prompts: DS.hasMany('prompt', {async: true}),
  isCompleted: DS.attr('boolean'),
});


Step.reopenClass({
  FIXTURES: [
  {  id: 1, 
    content: 'welcome to step one',
    isCompleted: false,
    prompts: [1,]
  },
  {  id: 2,
    content: 'in step two i want to ask, what else do we need to know? ',
    isCompleted: false,
    prompts: [2,]
  },
  {
    id: 3,
    content: 'What demographic info do you collect?',
    isCompleted: false,
    prompts: [3,4]
  },
  {
    id: 4,
    content: 'Do you use google adsense? Amazon adwords? other?',
    isCompleted: false
  },
  {
    id: 5,
    content: 'Storage',
    isCompleted: false
  }
  ]
});

export default Step;
