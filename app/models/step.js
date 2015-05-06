import DS from 'ember-data';

var Step = DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('string'), //how we find our component
  isCompleted: DS.attr('boolean', {defaultValue: false}),
  responses: DS.hasMany('response')
});


Step.reopenClass({
  FIXTURES: [
  {  id: 1, 
    title: 'We collect the following types of data about our users:',
    name: 'step-data-types',
    isCompleted: false
  },
  {  id: 2,
    title: 'We get this data from',
    name: 'step-data-sources',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Why do you need that information?',
    name: 'step-why',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Who do you share with and why?',
    name: 'step-sharing',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Contact',
    name: "step-contact",
    isCompleted: false,
  },
  ]
});

export default Step;
