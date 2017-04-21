exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'features/**/*.feature'
  ],
  cucumberOpts: {
    require: ['features/step_definitions/**/*.js','features/support/world.js']
    //tags: ['@pg'],
    //format: 'pretty',
    //profile: false,
    //'no-source': true
  },
  resultJsonOutputFile: 'results.json'
};
