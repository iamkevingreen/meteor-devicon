Package.describe({
  name: 'iamkevingreen:meteor-devicon',
  summary: 'Devicon Font library',
  version: '1.0.0',
  git: 'https://github.com/iamkevingreen/meteor-devicon'
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
