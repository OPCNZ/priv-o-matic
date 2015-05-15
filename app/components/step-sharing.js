import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addParty: function () {
      var parties = this.get('model.statement.sharingParties');
      if (! parties) {
        this.set('model.statement.sharingParties', Ember.A(['one']));
      }
      else {
        parties.pushObject('more');
      }
    },
    toggleHelp: function () {
      this.toggleProperty('showHelp');
    }
  },
});
