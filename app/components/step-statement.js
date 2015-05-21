import Ember from 'ember';

export default Ember.Component.extend({
  //Do we check the Check boxes?
  keptSecurely: function (){
    //have they filled in the secure method?
    return !! (this.model.get('statement.secureMethodOne'));
  }.property('model.statement.secureMethodOne'),
  dataDestruction: function (){
    //have they filled in the secure method?
    return !! (this.model.get('statement.dataRetentionTime'));
  }.property('model.statement.dataRetentionTime'),

  //mark this as complete as soon as we render it
  didInsertElement: function () {
    this.set('model.isCompleted', true);
  }

});
