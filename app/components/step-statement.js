import Ember from 'ember';

export default Ember.Component.extend({
  keptSecurely: function (){
    //have they filled in the secure method?
    return !! (this.model.get('statement.secureMethodOne'));
  }.property('model.statement.secureMethodOne'),
  dataDestruction: function (){
    //have they filled in the secure method?
    return !! (this.model.get('statement.dataRetentionTime'));
  }.property('model.statement.dataRetentionTime')
});
