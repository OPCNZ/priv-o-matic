import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    acknowledgeNoDataModal: function () {
      this.model.set('statement.noData', false);
    }
  }
});
