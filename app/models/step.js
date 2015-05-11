import DS from 'ember-data';

var Step = DS.Model.extend({
  statement: DS.belongsTo('statement', {async: true}),
  title: DS.attr('string'),
  name: DS.attr('string'), //how we find our component
  isCompleted: DS.attr('boolean', {defaultValue: false}),
});


Step.reopenClass({
  FIXTURES: [
  {  id: 1, 
    statement: 1,
    title: 'We collect the following types of data about our users:',
    name: 'step-data-types',
    isCompleted: false
  },
  {  id: 2,
    statement: 1,    
    title: 'We get this data from',
    name: 'step-data-sources',
    isCompleted: false,
  },
  {
    id: 3,
    statement: 1,    
    title: 'Why do you need that information?',
    name: 'step-why',
    isCompleted: false,
  },
  {
    id: 4,
    statement: 1,    
    title: 'Who do you share with and why?',
    name: 'step-sharing',
    isCompleted: false,
  },
  {
    id: 5,
    statement: 1,
    title: 'Contact',
    name: "step-contact",
    isCompleted: false,
  },
  {
    id: 6,
    statement: 1,    
    title: 'Optional Information',
    name: "step-optional-info",
    isCompleted: false,
  },
  {
    id: 7,
    statement: 1,    
    title: 'Applicable Laws',
    name: "step-legal-requirement",
    isCompleted: false,
  },
  {
    id: 8,
    statement: 1,    
    title: 'Privacy Statement',
    name: "step-statement",
    isCompleted: false,
  },
  {
    id: 9,
    statement: 1,    
    title: 'Security',
    name: "step-security",
    isCompleted: false,
  },
  ]
});

export default Step;
