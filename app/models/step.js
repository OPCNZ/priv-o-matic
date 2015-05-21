import DS from 'ember-data';

export default DS.Model.extend({
  statement: DS.belongsTo('statement', {async: true}),
  title: DS.attr('string'),
  name: DS.attr('string'), //how we find our component
  isCompleted: DS.attr('boolean', {defaultValue: false}),
  nextStep: DS.attr(),
  showInNav: DS.attr('boolean', {defaultValue: true})
});
;
