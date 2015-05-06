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
  {
    id: 6,
    title: 'Optional Information',
    name: "step-optional-info",
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Applicable Laws',
    name: "step-legal-requirement",
    isCompleted: false,
  },
  {
    id: 8,
    title: 'Privacy Statement',
    name: "step-statement",
    isCompleted: false,
  },
  ]
});

export default Step;
