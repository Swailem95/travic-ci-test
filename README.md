# Travis CI Test
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/Swailem95/travic-ci-test.svg?branch=master)


![Image of flow chart](https://i.imgur.com/Iz9wA9W.png)


# Linking Repo with Travis CI

Open the Travis CI [website](https://travis-ci.org/) and sign in with your GitHub account. Then choose any repository you want and link it with Travis CI. You then need to create a `.travis.yml` configuration file to configure Travis. 

### Example: 

```
language: node_js

# test on 3 different version
node_js:
  - "8"
  - "7"
  - "6"

# send message in slack after build completes
notifications:
  slack: slack-token-here
  ```
  
  You can also add other options in the configuration file:
  
  ```
before_install
after_success / after_failure
after_script
before_deploy
deploy
after_deploy

```
# Running Tests
Whenever a commit is pushed to the repo, Travis automatically starts testing, in node.js, it automatically executed the default test script in `package.json` which is `npm test`. You can see the results of the test in the Travis CI website. 

![screenshot1](https://i.imgur.com/6eamcDt.jpg)

# Documentation 
Check out the documentation [here](https://docs.travis-ci.com/user/getting-started) for more information.
