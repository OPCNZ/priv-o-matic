import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('steps', function () {
    this.route('step', {path: 'step/:step_id'});
  });
  this.route('whatsThis', {path: 'whatsThis'});
});
