import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function () {
      this.set('showModal', false);
    }
  }
});
