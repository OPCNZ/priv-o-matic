import {
  moduleForComponent,
  test
} from 'ember-qunit';


moduleForComponent('step-statement', {
  // Specify the other units that are required for this test
  needs: [
    'view:statement',
    'component:step-help',
    'model:statement',
    'initializer:load-fixtures'
  ]
});

import Ember from 'ember';

test('it renders', function(assert) {
  assert.expect(3);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  var Statement = Ember.Object.extend({
  });

  var statement = Statement.create({  id: 1 });
  component.set('model', statement);

  //the model was loaded
  assert.ok(component.get('model'), "component has a model");

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');

});