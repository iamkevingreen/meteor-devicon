Package.describe({
  name: 'iamkevingreen:meteor-devicon',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('devicon/fonts/devicon.eot', 'client');
  api.addFiles('devicon/fonts/devicon.svg', 'client');
  api.addFiles('devicon/fonts/devicon.ttf', 'client');
  api.addFiles('devicon/fonts/devicon.woff', 'client');
  api.addFiles('devicon/devicon-colors.css', 'client');
  api.addFiles('devicon/devicon.css', 'client');
});
