# Tobito - Ask your Repository Dialogflow Adapter
[![Coverage Status](https://coveralls.io/repos/github/hpi-sam/ask-your-repository-dialogflow-adapter/badge.svg?branch=master)](https://coveralls.io/github/hpi-sam/ask-your-repository-dialogflow-adapter?branch=master)

This repo is part of the "Ask your Repository" Bachelor project containing the following repos:  
- [Elija - Ask your Repository Backend API](https://github.com/hpi-sam/ask-your-repository-api)  
- [Jona - Ask your Repository Web Frontend](https://github.com/hpi-sam/ask-your-repository-web)  
- [Tobito - Ask your Repository Dialogflow Adapter](https://github.com/hpi-sam/ask-your-repository-dialogflow-adapter)  
- [Ask your Repository Docker Deployment](https://github.com/hpi-sam/ask-your-repository-docker)  

## Setup
1. Install YARN: https://yarnpkg.com/lang/en/docs/install/
2. Clone the repository: `git clone https://github.com/hpi-sam/ask-your-repository-dialogflow-adapter.git`
3. Change directory into the repository folder: `cd ask-your-repository-dialogflow-adapter`
4. Execute `yarn install` to install dependencies
5. Execute `yarn flow-typed install` to install types for all dependencies
5. Start developing and Have fun!
6. ???
7. Profit!

## Preconfigured project commands

If you have a look at the `package.json` you can see quite a few preconfigured 'scripts'.  
The most important one is `yarn start`. This basically executes everything you could wish for:
* Automatically starts builds on file change
* Automatically restarts the server on file change
* Automatically executes tests on file change
* Automatically runs ESLint on file change
* Automatically runs flow type check on file change

If you want to only do one of the above you can use: `yarn build`, `yarn serve`, `yarn test`, `yarn lint`, `yarn flow` respectively.  
For test and lint the commands `yarn tdd` and `yarn ldd` start a watcher to run them automatically on file change. `yarn build` and `yarn serve` are always running with a watcher.

## Developer (git) Workflow

1. When you start working on a new feature. Create a new branch like this: `git checkout -b <issuenumber>/description-here` example: `git checkout -b 3/add-readme`.
2. Add your changes with **small/'atomic' commits**. You commit messages should complete the sentence: **"When applied this commit will..."**, start with a **captial letter** and end with a **dot and reference** their issue. They should also **not surpass 72 symbols** to still be displayed inline on github.
If you need more lines (should not be necessary with atomic commits but sometimes it happens). Make the first line a concise conclusion, with the dot and reference. And add more description in following lines.  
Examples: "When applied this commit will" `Add a signup button to the main page. Ref #24` , `Remove the ugly icon on profiles. Ref #55`  
Multiline example:  
```
Add profile pages. Ref #41  
- Add path to profile /:user/profile
- Add profile icons
- Add fancy dashboard about user actions:
- Displays status messages, follows and eaten cookies
```
3. Open a PR on github and add reviewers
4. Add more commits
5. If our definition of done is met: rebase your branch to the curent state of the master  
(`git fetch` and then: `git rebase -i origin/master`) and merge with option: **Rebase and Merge**.


## Major Dependencies

We use the [actions on google library](https://www.npmjs.com/package/actions-on-google) to manage out interaction with Dialogflow.
Our interaction with the backend Elija server is managed with simple axios requests found [here](https://github.com/hpi-sam/ask-your-repository-dialogflow-adapter/blob/master/src/controller/RequestController.js). 
