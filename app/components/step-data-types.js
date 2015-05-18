import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleHelp: function () {
      this.toggleProperty('showHelp');
    },
    acknowledgeNoDataModal: function () {
      this.model.set('statement.noData', false);
    }
  }
});
