import DS from 'ember-data';

export default DS.Model.extend({
  blanks: DS.hasMany('blank')
  
});
