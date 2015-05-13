import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('statement', {
  // Specify the other units that are required for this test.
  needs: ['step']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
