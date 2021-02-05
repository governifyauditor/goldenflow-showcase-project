# Goldenflow Showcase Project
Guide to simulate the golden flow and obtain metrics out of it using Governify ecosystem.

![Golden Flow Diagram](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/goldenflow.PNG?raw=true)

This figure shows the Golden Flow, a workflow for projects in which different teams contribute individually to a large code repository. The upstream repository is forked and each planned feature is developed by a member of the team in a separate branch. Once a feature is completed, a pull request (PR) is opened for the whole team to discuss
the changes, and if accepted, merge the changes to the forked repository's main branch. Once merged, the main branch is deployed to the staging server for the client to validate new functionality. If the client signs off on the feature, another PR is opened to merge the changes into the main repository so the feature can be included in the production server. 

## Prerequisites

### Create projects and tools
If you already have your tools setup you can skip this part.

First, you need to set up your different development tools:
 - Create Github Repository
 - Create Pivotal Project
 - Add GitHub Repository to Travis-CI and configure a simple workflow ([Guide](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/guides/Travis.md))
 - Create Heroku App and enable automatic deploys ([Guide](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/guides/Heroku.md))

### Bluejay
 - Create info.yml file. You can use this [template](https://github.com/governify/audited-project-template/blob/main/info.yml) and also take a look at this [example](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/info.yml) showing what it should look like. This file will be used by Bluejay to know the different identities of your tools to evaluate and determine the different indicators.

### Governify auditor project invite
The Governify auditor should be present on the private tools in order to have access to your information:
 - GitHub: If your repository is public or it is present on your organization there is no need to add the auditor. If not, you'll need to add him by going to Settings→Manage access on your repository and click on the green button labeled as `Invite a collaborator`. Enter `governifyauditor` and accept.

![GH invite](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/auditor1.PNG?raw=true)

 - Pivotal Tracker: If your repository is public you don't need to add the auditor. If not, go to your project, click on members at the top and click on `Invite people`. Enter governify.auditor@gmail.com and add him.

![PT invite](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/auditor2.PNG?raw=true)

 - Heroku: You'll need to add the auditor as a collaborator. On your app dashboard view, click on `Access` at the top and then `Add collaborator`. Enter governify.auditor@gmail.com and save changes.

![H invite](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/auditor3.PNG?raw=true)

 - Travis: You don't need to add the auditor if the repository is public. If it isn't, having the auditor on your GitHub repo is required.

Bear in mind that you might need to wait for the Governify auditor to accept the invitations in order for the points to appear in the dashboard.

## Simulate golden flow

### New branch - Started stories correlation
1. Create 4 stories on PT (Pivotal Tracker) and start them.
2. Create 4 branches on GH (GitHub) from `main` branch. On 3 of them, write a PT story ID from the ones created on step 1. On the remaining one, write a name for the branch without having an id on it.

`Pivotal Tracker ID location:`

![PT ID](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/golden1.PNG?raw=true)

`GitHub Branch name:`

![Github branch name](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/golden2.PNG?raw=true)

### Open PR - Finish story
3. Modify 4 of the branches. Open 3 PR (2 of the branches with the PT story ID on the name, and 1 using the branch that doesn't have the PT story ID on it).
4. Finish the 4 stories on PT.

### Merge PR - Deliver story
5. Merge 2 PR (1 having the PT story id on the name, 1 not having it). Please, check Heroku or wait 5 minutes between each merge to ensure it is deployed before adding new changes so it deploys twice.
6. Deliver the 4 stories.

## Join in Bluejay's system
Follow this steps:
1. Access to [https://join.bluejay.governify.io/](https://join.bluejay.governify.io/). This is the view for joining into the system and start the tools audition.

![Join 1](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/join1.PNG?raw=true)

2. Enter your Repository URL. For example, `https://github.com/governifyauditor/goldenflow-showcase-project` would be the URL of this Repository.
3. Click on Check. Once checked, any errors concerning your info.yml file will appear. Correct them if you have any. If no errors are found, you'll get a success message and a new section will appear.

![Join 2](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/join2.PNG?raw=true)

4. In the input enter a valid course code. Click on Register. If everything is ok, you will see a success and a badge will appear aswell as a markdown for adding it to your repo's README.md file. By clicking on the badge you will access to the dashboard. If you've already registered into the system you should see a message telling you so but the dashboard badge will be given so you can access the dashboard in case you lost it.

The points should appear in 5 minutes or less. If you have any problem when accomplishing this section, you can contact [governify.auditor@gmail.com](mailto:governify.auditor@gmail.com) for troubleshooting.

## Check results
After doing all of this, if the data has been calculated there should appear a new point for each metric:
- At least 75% of releases must match the merge of a PR into master within ten minutes: 2/2 = 100%
- At least 75% of Travis builds should pass correctly: This depends on whether your pipeline was successful or not. If everything passed correctly you should see 100%
- Correlation between new branches and started stories for the whole class: 3/4 = 75%
- Correlation between open pull request and finished stories for the whole class: 2/4 = 50%
- Correlation between merged pull requests and delivered stories for the whole class: 1/4 = 25%

The `Heroku releases` metric might have a different value if you didn't wait until a PR was deployed before merging a new one.
