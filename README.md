# automationtest
## 1. Prerequisites
Before running test use should install NodeJS >6.1.0 at you environment: https://nodejs.org/en/download/

## 2. Running of auto-tests locally
In order to run testing script at your own machine perform the following instructions:

### 2.1 Load the project from the GitHub
You may load the project using the command line:
```
git clone https://github.com/MariaKomoed/automationtest.git
```
### 2.2 Install components
As soon as project is loaded, go to the root and perform command:
```
npm install
```
It will install all components based on package.json file into node_modules folder.

### 2.3 As soon as components are loaded you may run testing scripts.

#### 2.3.1 Run all tests

If you prefer to see the application GUI while tests execution you may run tests in Chrome.

To run all tests in Chrome:
```
npx cypress open -b chrome
```
In order to get the report in the Cypress Dashboard you should add some more parameters:
```
npx cypress open -b chrome --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83
```
--record means that transfer results to the Cypress Dashboard is on. --key parameter followed by value 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83 is used for access to project in the Cypress Dashboard.

So, the command above will run testing scrips in Chrome and will create the report in the Cypress Dashboard.

To do the same in a headless mode use the following command:
```
npx cypress open --record --key 6bc2a91c-3b07-4bf0-8809-3e8fed5fbf83
```
#### 2.3.2 Run single test file
Cypress provides the Test Runner that allows you to run testing files separately and see the execution process: https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview

To open it use the following command:
```
npx cypress open
```
In the Test Runner you will see the list of testing files. You may click any of them and execution tests within a single it would be started in a separate window. Pay attention that results recording and reports creation is not performed if you use the Test Runner. So, this option is mostly for development and issues investigation. For running all the scope you should better use other options.

## 3. Reporting

#### 3.1 Results are loaded into the Cypress Dashboard
Link for the reporting project: https://dashboard.cypress.io/#/projects/wrhsy6/runs Please, log in with your credentials - since the project is public you will be able to see results and report into this project in case of running of tests at your local env with the key.