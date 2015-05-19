import Ember from 'ember';

export default Ember.Component.extend({
  keptSecurely: function (){
    //have they filled in the secure method?
    return !! (this.model.get('statement.secureMethodOne'));
  }.property('model.statement.secureMethodOne')
});
