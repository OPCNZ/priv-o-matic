import Ember from 'ember';

export default Ember.Component.extend({
    needs: ['steps'],
    actions: {
        nextStep: function () {
      		this.model.save();
            
            let next_step = parseInt(this.model.id) + 1;
            this.transitionToRoute('steps.step', next_step);  		
      	}
    },

    otherData: undefined,
    watchOtherdata: function() {
  	   this.model.otherData = true;
       //show the text field for entering other
       this.toggleProperty('isShowingOther');
    }.observes('otherData'),

    identityData: undefined,
    watchidentityData: function () {
  	   this.model.identityData = !!this.get('identityData');
    }.observes('identityData')
});
