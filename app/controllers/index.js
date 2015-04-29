import Ember from 'ember';

export default Ember.Controller.extend({
  stepOne: function () {
    return this.store.find('step', 1);
  }.property('stepOne')
});
