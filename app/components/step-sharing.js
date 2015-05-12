import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addParty: function () {
      var parties = this.get('model.statement.sharingParties');
      if (! parties) {
        // Ember.A will create an "Ember Array" which is a superset of the
        // normal JS Array type except it it key-value observing aware
        //
        // TLDR: If you are creating an array literal wrap it in Ember.A like this
        this.set('model.statement.sharingParties', Ember.A(['one']));
      }
      else {
        // #pushObject is a method on Ember.Array that does the same as #push
        // except it also causes ember to update anything observing the array
        //
        // TLDR: use #pushObject not #push to add values to an ember array
        parties.pushObject('more');
      }
    }
  },
});
