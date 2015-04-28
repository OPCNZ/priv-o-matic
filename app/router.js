import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.resource('index', { path: '/' }, function () {
    this.resource('step', {path: 'step/:step'}, function () {
  		this.route('progress');  	
	});
  });

  this.route('whatsThis', {path: 'whatsThis'});
  
});
