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
    title: 'Information',
    name: 'step-data-types'
  },
  {  id: 2,
    statement: 1,
    title: 'We get this data from',
    name: 'step-data-sources'
  },
  {
    id: 3,
    statement: 1,
    title: 'Why do you need that information?',
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
    name: "step-contact"
  },
  {
    id: 6,
    statement: 1,
    title: 'Optional Information',
    name: "step-optional-info"
  },
  {
    id: 7,
    statement: 1,
    title: 'Applicable Laws',
    name: "step-legal-requirement"
  },
  {
    id: 8,
    statement: 1,
    title: 'Privacy Statement',
<<<<<<< HEAD
    name: "step-statement-1",
    isCompleted: false,
=======
    name: "step-statement"
>>>>>>> origin/bw/develop
  },
  {
    id: 9,
    statement: 1,
    title: 'Security',
    name: "step-security"
  },
  {
    id: 10,
    title: 'Privacy Statement',
    name: "step-statement-2",
    isCompleted: false,
  },
  {
    id: 11,
    title: 'Retention',
    name: "step-retention",
    isCompleted: false,
  },
  {
    id: 12,
    title: 'Privacy Statement',
    name: "step-statement-3",
    isCompleted: false,
  },
  ]
});

export default Step;
