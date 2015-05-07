import Ember from 'ember';

export default Ember.Component.extend({
  watchOtherdata: function() {
    this.toggleProperty('isShowingOther');
  }.observes('model.otherData'),
});
