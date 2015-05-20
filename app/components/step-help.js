import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggleHelp: function () {
            this.toggleProperty('showHelp');
        }
    },
    //default text, if none provided.
    buttonText: "Why does this matter?"
});
