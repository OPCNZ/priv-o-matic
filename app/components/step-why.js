import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addReason: function () {
      var reasons = this.get('model.statement.extraReasons');
      reasons.pushObject('');
    },
    toggleHelp: function () {
      console.log("showing help")
      this.toggleProperty('showHelp');
    },
    notReady: function() {
      /**
        We're not ready to "move along" so pop up the modal instead
      */
      this.set('showNotReadyModal', true);
    },
    ackMessage: function () {
      this.set('showNotReadyModal', false);
    }
  },
  readyToMoveOn: function () {

    //only these reasons
    // &&
    // //entered at least one reason
    return (!! this.get('model.statement.onlyTheseReasons') && !! this.get('model.statement.collectionReason'));

  }.property('model.statement.onlyTheseReasons', 'model.statement.collectionReason')
});
