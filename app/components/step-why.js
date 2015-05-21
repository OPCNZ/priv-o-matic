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

      //they haven't picked yes or no on the radio buttons yet
      if (this.get('model.statement.onlyTheseReasons') === undefined) {
        this.set('showNotReadyModal', true);
      }
      //they picked No on the radio buttons, show the special message
      else if (! this.get('model.statement.onlyTheseReasons')) {
        this.set('showUnstatedPurposeModal', true);
      }
      //other reason for not being ready, use the default error message
      else {
        this.set('showNotReadyModal', true);
      }

    }
  },
  readyToMoveOn: function () {

    //only these reasons
    // &&
    // //entered at least one reason
    return (!! this.get('model.statement.onlyTheseReasons')) && (!! this.get('model.statement.collectionReason'));

  }.property('model.statement.onlyTheseReasons', 'model.statement.collectionReason'),

});
