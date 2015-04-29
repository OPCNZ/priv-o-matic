import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    nextStep: function () {
      console.log("Next step");
    }
  },
  prompts: function () {
    this.model.get('prompts');
  }.property('@each.prompts'),
});
