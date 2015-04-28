import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
  // allow fixtures to be queried
  queryFixtures: function(records, query /*, type */) {
    return records.filter(function(record) {
      for(let key in query) {
        if (!query.hasOwnProperty(key)) { continue; }
        let value = query[key];
        if (record[key] !== value) { return false; }
      }
      return true;
    });
  }
});
