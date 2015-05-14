import Ember from 'ember';

/**
 * Create an <input /> tag whose value is bound to a particular object in an
 * array.
 *
 * Usage:
 *    {{array-item-input array=someArr index=someInt}}
 *
 */
export default Ember.Component.extend({

  // attribute: array {Ember.Array} - required

  // attribute: index {Integer} - required

  // attribute: updateEvent {String} - optional
  updateEvent: 'focus-out', // dasherized because {{input}} wants that

  // attribute: placeholder {String} - optional placeholder
  placeholder: '',

  _val: null,

  setInitialValue: function() {
    // val = array[index]
    return this.set('_val', this.get('array').objectAt(this.get('index')));
  }.on('init'),

  actions: {
    update: function() {
      // array[index] = val
      this.get('array').replace(this.get('index'), 1, [this.get('_val')]);
    },
  },
});
