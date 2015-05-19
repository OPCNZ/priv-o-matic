import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    acknowledgeNoDataModal: function () {
      this.model.set('statement.noData', false);
      this.set('showNotReadyMessage', false);
    },

    nextStep: function () {
      if (this.isReady()) {
        this.sendAction();
      }
      else {
        this.set('showNotReadyMessage', true);
      }
    }
  },
  isReady: function () {

    //if any of this array is true, then we're ready to move forward
    var options = ['identityData', 'locationData', 'userBehaviourData', 'computerNetworkData', 'financialData', 'otherData'];
    for (var i = options.length - 1; i >= 0; i--) {
      if (this.get('model.statement.' + options[i])) {
        return true;
      }
    }
    return false;
  }


});
