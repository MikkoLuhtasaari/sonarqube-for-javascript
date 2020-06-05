# SonarQube testing

## Requirements

You will need to have the following tools installed locally.

* Docker

* npm

## Running locally

* `npm install`

* `docker pull sonarqube:latest`

* `docker run -d --name sonarqube -p 9000:9000 sonarqube:latest`

* Wait for the container to start up properly. This can take up to one minute.

* `./node_modules/sonarqube-scanner/dist/bin/sonar-scanner`

### Notes about the local testing

By default SQ scanner parses the project name and files to scan from the package.json.
You an override these settings with following steps:
  1. Open page http://localhost:9000/about
  2. Login using admin as username and password
  3. Create new project
  4. Copy and paste the token to `sonar-project.js`
    * Don't ever save production tokens to version control!
  5. Write project name, source files to test etc to `sonar-project.js`
  6. Run `npm run-script sonar`

## More information and references

* https://github.com/bellingard/sonar-scanner-npm

* https://www.ryandoll.com/post/2018/3/25/sonarqube-docker

* https://blog.setapp.pl/sonarqube_introduction

* https://docs.sonarqube.org/latest/setup/get-started-2-minutes/