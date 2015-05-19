import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addParty: function () {
      var parties = this.get('model.statement.sharingParties');
      parties.pushObject(Ember.A({}));
    }
  },
});
