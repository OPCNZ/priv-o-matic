import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToNextStep: function () {
      console.log("Next step");
      let next_step = parseInt(this.model.id) + 1;
      this.transitionToRoute('steps.step', next_step);
    }
  },
  prompts: function () {
    this.model.get('prompts');
  }.property('@each.prompts'),
});
