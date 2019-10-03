# automationtest
1. Prerequisites
Before running test use should install NodeJS >6.1.0 at you environment: https://nodejs.org/en/download/

2. Install components
As soon as project is loaded, go to the root and perform command:

npm install

It will install all components based on package.json file into node_modules folder.

Cypress provides the Test Runner that allows you to run testing files separately and see the execution process: https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview

To open it use the following command:

npx cypress open

In the Test Runner you will see the list of testing files. You may click any of them and execution tests within a single it would be started in a separate window.

To run all tests in Chrome:

npx cypress run -b chrome

In order to get the report in the Cypress Dashboard you should add some more parameters:

npx cypress run -b chrome --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83

To do the same in a headless mode use the following command:

cypress run --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83


3. Reporting
Results are loaded into the Cypress Dashboard
Link for the reporting project: https://dashboard.cypress.io/#/projects/wrhsy6/runs Please, log in with your credentials - since the project is public you will be able to see results and report into this project in case of running of tests at your local env with the key.
