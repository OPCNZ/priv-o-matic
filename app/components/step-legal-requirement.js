import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggleHelp: function () {
            this.toggleProperty('showHelp');
        },
        showModal: function() {
            this.set('showModal', true);
        },
        ackModal: function() {
            this.set('showModal', false);
        }

    }
});
