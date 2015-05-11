import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        nextStep: function () {
            this.model.set('isCompleted', true);
            this.model.save();

            let next_step = parseInt(this.model.id, 10) + 1;

            if (next_step < 9) { //TODO work out how many steps there are
                this.transitionToRoute('steps.step', next_step);          
            }
            else {
                this.transitionToRoute('steps.finish');
            }
        }    
    }

});
