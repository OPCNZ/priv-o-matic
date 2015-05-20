import Ember from 'ember';

export default Ember.Component.extend({
  showOtherDataModal: true,
  showThirdPartyDataModal: true,

  actions: {
    nextStep: function () {
      //check is we are ready to move forward
      if (this.isReady()) {
        this.sendAction();
      }
      else {
        //we're not ready, so show the modal-message
        this.set('showNotReadyMessage', true);
      }
    }
  },
  isReady: function () {
    /**
    Check if our form is filled out
    */
    //if any of this array is true, then we're ready to move forward
    var options = ['userDataSource', 'publicDataSource', 'thirdPartyDataSource', 'otherDataSource'];
    var self = this;

    return options.any(function(option) {
      if (self.get('model.statement.' + option)) {
        return true;
      }
    });
  }
});
