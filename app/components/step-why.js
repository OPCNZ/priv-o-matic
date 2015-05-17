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
      this.set('notReadyModal', true);
    },
    ackMessage: function () {
      this.set('notReadyModal', false);
    }
  },

  setToYes: function () {
    this.model.set('statement.onlyTheseReasons', true);
    this.model.set('statement.notOnlyTheseReasons', false);
  },
  setToNo: function () {
    this.model.set('statement.onlyTheseReasons', false);
    this.model.set('statement.notOnlyTheseReasons', true);
  },

  //make a adhoc radio button like behaviour on our 2 checkboxes
  onlyTheseReasons: function () {
      if(!! this.get('model.statement.onlyTheseReasons')) {
        this.setToYes();
      }
      else {
       this.setToNo();
      }
  }.observes('model.statement.onlyTheseReasons'),

  notOnlyTheseReasons: function () {
      if(!! this.get('model.statement.notOnlyTheseReasons')) {
        this.setToNo();
      }
      else {
       this.setToYes();
      }
  }.observes('model.statement.notOnlyTheseReasons'),

  readyToMoveOn: function () {

    //only these reasons
    // &&
    // //entered at least one reason
    return (!! this.get('model.statement.onlyTheseReasons') && !! this.get('model.statement.collectionReason'));

  }.property('model.statement.onlyTheseReasons', 'model.statement.collectionReason')
});
