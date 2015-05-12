import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addReason: function () {
      var reasons = this.get('model.statement.extraReasons');
      if (! reasons) {
        this.set('model.statement.extraReasons', Ember.A(['one']));
      }
      else {
        reasons.pushObject('more');
      }
    }
  },


});
