import Ember from 'ember';

export default Ember.Component.extend({
  needs: ['steps'],
  actions: {

  },

  otherData: undefined,
  watchOtherdata: function() {
    this.toggleProperty('isShowingOther');
  }.observes('otherData')

});
