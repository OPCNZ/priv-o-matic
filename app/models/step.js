import DS from 'ember-data';

var Step = DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('string'), //how we find our component
  isCompleted: DS.attr('boolean'),
  asideComponentName: function() {
    return this.get('name') + '-aside';
  }
});


Step.reopenClass({
  FIXTURES: [
  {  id: 1, 
    title: 'We collect the following types of data about our users',
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
  ]
});

export default Step;
