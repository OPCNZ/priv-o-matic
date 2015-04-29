import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('prompt', {
  // Specify the other units that are required for this test.
  needs: ['steps.step']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
