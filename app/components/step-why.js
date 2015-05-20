import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addReason: function () {
      var reasons = this.get('model.statement.extraReasons');
      reasons.pushObject('');
    },
    notReady: function() {
      /**
        We're not ready to "move along" so pop up the modal instead
      */
      this.set('showNotReadyModal', true);
    }
  },
  readyToMoveOn: function () {

    //only these reasons
    // &&
    // //entered at least one reason
    return (!! this.get('model.statement.onlyTheseReasons') && !! this.get('model.statement.collectionReason'));

  }.property('model.statement.onlyTheseReasons', 'model.statement.collectionReason')
});
