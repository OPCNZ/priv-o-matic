import Ember from 'ember';

export default Ember.Component.extend({
  //These change to false after the modals have been seen once,
  //thereby not showing them again.
  showOtherDataModal: true,
  showThirdPartyDataModal: true
});
