export function initialize( container, application ) {
  // application.inject('route', 'foo', 'service:foo');
  let store = container.lookup('store:main');
  store.pushMany('statement', statementData)
  store.pushMany('step', stepData);
}

export default {
  name: 'load-fixtures',
  initialize: initialize,
  after: ['store'],
};

var statementData = [{  id: 1 }];

var stepData =   [
  {
    id: 1,
    statement: 1,
    title: 'Information',
    name: 'step-data-types'
  },
  {  id: 2,
    statement: 1,
    title: 'Collection',
    name: 'step-data-sources'
  },
  {
    id: 3,
    statement: 1,
    title: 'Purpose',
    name: 'step-why'
  },
  {
    id: 4,
    statement: 1,
    title: 'Sharing',
    name: 'step-sharing'
  },
  {
    id: 5,
    statement: 1,
    title: 'Contact',
    name: "step-contact"
  },
  {
    id: 6,
    statement: 1,
    title: 'Optional Info',
    name: "step-optional-info"
  },
  {
    id: 7,
    statement: 1,
    title: 'Applicable Laws',
    name: "step-legal-requirement"
  },
  {
    id: 8,
    statement: 1,
    title: 'Privacy Statement',
    name: "step-statement",
  },
  {
    id: 9,
    statement: 1,
    title: 'Security',
    name: "step-security",
    nextStep: 8,
    showInNav: false,
  },
  {
    id: 10,
    statement: 1,
    title: 'Retention',
    name: "step-retention",
    nextStep: 8,
    showInNav: false,
  }
  ];
