Package.describe({
  name: 'iamkevingreen:meteor-devicon',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('iamkevingreen:meteor-devicon.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('iamkevingreen:meteor-devicon');
  api.addFiles('iamkevingreen:meteor-devicon-tests.js');
});
