import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        nextStep: function () {
            this.model.set('isCompleted', true);
            this.model.save();

            //try to read next step from the model.
            let nextStep = this.model.get('nextStep');

            //nothing on the model, so increment to find the next step
            if (!nextStep) {
                nextStep = parseInt(this.model.id, 10) + 1;
            }

            if (nextStep < 9) { //TODO work out how many steps there are
                this.transitionToRoute('steps.step', nextStep);
            }
            else {
                this.transitionToRoute('steps.finish');
            }
        }
    }
});
