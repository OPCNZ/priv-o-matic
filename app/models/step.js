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
    isCompleted: false
    name: 'step-data-types'
  },
  {  id: 2,
    statement: 1,
    title: 'We get this data from',
    isCompleted: false,
    name: 'step-data-sources'
  },
  {
    id: 3,
    statement: 1,
    title: 'Why do you need that information?',
    isCompleted: false,
    name: 'step-why'
  },
  {
    id: 4,
    statement: 1,
    title: 'Who do you share with and why?',
    name: 'step-sharing'
  },
  {
    id: 5,
    statement: 1,
    title: 'Contact',
    isCompleted: false,
    name: "step-contact"
  },
  {
    id: 6,
    statement: 1,
    title: 'Optional Information',
    isCompleted: false,
    name: "step-optional-info"
  },
  {
    id: 7,
    statement: 1,
    title: 'Applicable Laws',
    isCompleted: false,
    name: "step-legal-requirement"
  },
  {
    id: 8,
    statement: 1,
    title: 'Privacy Statement',
    isCompleted: false,
    name: "step-statement"
  },
  {
    id: 9,
    statement: 1,
    title: 'Security',
    isCompleted: false,
    name: "step-security"
  },
  ]
});

export default Step;
