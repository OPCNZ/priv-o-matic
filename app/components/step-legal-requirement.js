import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        showModal: function() {
            this.set('showModal', true);
        },
    }
});
