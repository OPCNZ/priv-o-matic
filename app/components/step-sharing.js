import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addParty: function () {
      var statement = this.model.get('statement');
      var parties = statement.get('sharingParties');
      if (! parties) {
        parties = ['one'];
      }
      else {
        parties.push('more');
      }

      statement.set('sharingParties', parties);

      console.log(parties);
      debugger;
      
    }
  },

  sharingParties: function () {
    return this.model.get('statement.sharingParties')
  }.property('@each.model.statement.sharingParties')
});
