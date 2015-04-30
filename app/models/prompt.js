import DS from 'ember-data';

let Prompt = DS.Model.extend({
  step: DS.belongsTo('step'),

  question: DS.attr('string'), //our prompt
  answer: DS.attr('string'), // their answer
  clause: DS.attr('string'),
  isAnswered: DS.attr('boolean'),

});

let data = [
  {step: 1, prompts: ['My business is called %businessName'] },
  {step: 2, prompts: ['How will the weather be tomorrow? %weather'] },
  {step: 3, prompts: ['Do you use google adsense? %goodle-adsense', 'Do you use Amazon Web Services? %amazon'] },
  {step: 4, prompts: ['Where do you store the data collected? %data-collected']}
  ];

//Turn the data above into the format that ember fixtures wants
var fixtures = [];
var id_number = 0;

for (let step of data) {
  id_number +=1;
  let step_number = step.step;
  let prompts = step.prompts;
  for (let question of prompts) {
    fixtures.push({id: id_number, question: question, step: step_number});
  }
}

Prompt.reopenClass({
  FIXTURES: fixtures
});

export default Prompt;
