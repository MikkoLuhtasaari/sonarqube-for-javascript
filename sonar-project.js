const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl : 'http://localhost:9000',
    token : "7595586e3966651cd79cd266ebb2102b1a5c1f1c",
    options: {
      'sonar.projectName': 'javascript-testing',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src'
    }
  },
  () => process.exit()
);