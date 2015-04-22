import DS from 'ember-data';

let Clause = DS.Model.extend({
  content: DS.attr('string'),
  blanks: DS.hasMany('blank')
});

Clause.reopenClass({
  FIXTURES: [
    {'id': 1, 'content': 'We collect personal information from you, including information about your %black.'},
    {'id': 2, 'content': 'We need your location information so that we can serve maps. We need demographic information so we can provide relevant advertising. We need usage information to maintain your preferences.'},

  {'id': 3, 'content': '(Alternate: We need that information from you so that we can give you a persistent, personalised service.)'},

  {'id': 4, 'content': 'It’s optional to share location information with us, however if you choose not to some personalisation features will not be available.'},

  {'id': 5, 'content': '(Alternate: If you are going to use our service at all, we have to have the information marked with *. Other information is optional, but [free text field to explain what happens if you don’t provide it]”)'},

  {'id': 6, 'content': 'We also share your demographic information with Google Adsense for advertising and Amazon Web Services for storage. (Note legal obligation to provide address as well, hyperlink or free text?)'},

  {'id': 7, 'content': 'You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at PrivacyOfficer@privacy.org.nz, PO Box 10094 or on 0800 803 909.'}
  ]
});

export default Clause;
