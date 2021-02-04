# Goldenflow Showcase Project
Guide to simulate the golden flow and obtain metrics out of it using Governify ecosystem.

![Golden Flow Diagram](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/goldenflow.PNG?raw=true)

This figure shows the Golden Flow, a workflow for projects in which different teams contribute individually to a large code repository. The upstream repository is forked and each planned feature is developed by a member of the team in a separate branch. Once a feature is completed, a pull request (PR) is opened for the whole team to discuss
the changes, and if accepted, merge the changes to the forked repository's main branch. Once merged, the main branch is deployed to the staging server for the client to validate new functionality. If the client signs off on the feature, another PR is opened to merge the changes into the main repository so the feature can be included in the production server. 

## Bear in mind
The Governify auditor should be present on your private tools (Ex. Heroku) in order to have access to your information.

## Create projects and tools
If you already have your tools setup you can skip this part.

First, you need to set up your different development tools:
 - Create Github repo
 - Create Pivotal projects
 - Add GitHub repo to Travis-CI
 - Create Heroku app
 - (Optional) Add your GitHub project to CodeClimate


## Prerequisites
 - Having the info.yml correctly created on your root folder of the repo
 - Configure automatic deploys on Heroku
 - Configure your CI to work (.travis.yml)
 - (Optional) Add CodeClimate to your CI workflow

## Simulate golden flow

### New branch - Started stories correlation
1. Create 4 stories on PT and start them.
2. Create 4 branches from `main` with 3 of them having 3 different PT stories IDs from the ones created at the first step.

### Open PR - Finish story
3. Modify 4 of the branches and open 3 PR (2 of the ones with the ID on the name, and the one that doesn't).
4. Finish 4 stories on PT.

### Merge PR - Deliver story
5. Merge 2 PR (1 having the id on the name, 1 not having). Please, check Heroku or wait 5 minutes between each merge to ensure it is deployed before adding new changes.
6. Deliver 4 stories.


## Check results
After doing all of this, if the data has been calculated there should appear a new point for each metric:
- At least 75% of releases must match the merge of a PR into master within ten minutes: 2/2 = 100%
- At least 75% of Travis builds should pass correctly: This depends on whether your pipeline was successful or not. If everything passed correctly you should see 100%
- Correlation between new branches and started stories for the whole class: 3/4 = 75%
- Correlation between open pull request and finished stories for the whole class: 2/4 = 50%
- Correlation between merged pull requests and delivered stories for the whole class: 1/4 = 25%

The last metric (Heroku releases) might have a different value if you didn't wait until a PR was deployed before merging a new one.
