import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  value: DS.attr(),
  step: DS.belongsTo('step')
});
