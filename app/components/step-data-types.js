import Ember from 'ember';

export default Ember.Component.extend({
    needs: ['steps'],
    actions: {

    },

    otherData: undefined,
    watchOtherdata: function() {
       //this.model.otherData = !!this.get('otherData');
       //show the text field for entering other
       this.toggleProperty('isShowingOther');
    }.observes('model.otherData'),

});
