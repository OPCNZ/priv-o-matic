import DS from 'ember-data';
import Ember from 'ember';

let Statement = DS.Model.extend({
    steps: DS.hasMany('step', {async: true}),


    //Data types
    identityData: DS.attr('boolean', {default: false}),
    locationData: DS.attr('boolean', {default: false}),
    userBehaviourData: DS.attr('boolean', {default: false}),
    computerNetworkData: DS.attr('boolean', {default: false}),
    financialData: DS.attr('boolean', {default: false}),
    otherData: DS.attr('boolean', {default: false}),
    otherDataInfo: DS.attr('string'),
    noData: DS.attr('boolean', {default: false}),

    //Data Sources
    userDataSource: DS.attr('boolean', {default: false}),
    publicDataSource: DS.attr('boolean', {default: false}),
    thirdPartyDataSource: DS.attr('boolean', {default: false}),
    otherDataSource: DS.attr('boolean'),
    otherDataSourceInfo: DS.attr('string'),


    //why
    extraReasons: Ember.A(),
    onlyTheseReasons: DS.attr('boolean', {default: false}),

    //Sharing
    sharingParties: Ember.A(),

    //Optional Info
    extraOptionalInfo: Ember.A(),


});

Statement.reopenClass({
  FIXTURES: [{
    id: 1,
    businessName: 'Spacely Sprockets'
  }]
});

export default Statement;
