import DS from 'ember-data';
import Ember from 'ember';

let Statement = DS.Model.extend({
    steps: DS.hasMany('step', {async: true}),


    //Data types
    identityData: DS.attr('boolean'),
    locationData: DS.attr('boolean'),
    userBehaviourData: DS.attr('boolean'),
    computerNetworkData: DS.attr('boolean'),
    financialData: DS.attr('boolean'),
    otherData: DS.attr('boolean'),
    otherDataInfo: DS.attr('boolean'),
    noData: DS.attr('boolean'),

    //Data Sources
    userDataSource: DS.attr('boolean'),
    publicDataSource: DS.attr('boolean'),
    thirdPartyDataSource: DS.attr('boolean'),
    otherDataSource: DS.attr('boolean'),
    otherDataSourceInfo: DS.attr(),


    //why
    extraReasons: DS.attr(),

    //Sharing
    sharingParties: DS.attr(),


});

Statement.reopenClass({
  FIXTURES: [{
    id: 1,
    businessName: 'Spacely Sprockets'
  }]
});

export default Statement;
