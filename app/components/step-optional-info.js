import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addOptionalInfo: function () {
      var optional = this.get('model.statement.extraOptionalInfo');
      optional.pushObject(Ember.A({}));
    }
  },
});
