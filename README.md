# Goldenflow Showcase Project
## Github / Pivotal / Heroku Stack
---
> Here you can see the other available stacks:
> - [GitLab/Heroku/Pivotal Stack](https://gitlab.com/governify_auditor/goldenflow-showcase-project/-/blob/main/README.md)

Guide to simulate the golden flow and obtain metrics out of it using Governify ecosystem.

![Golden Flow Diagram](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/Goldenflow.PNG?raw=true)

This figure shows the Golden Flow, a workflow for projects in which different teams contribute individually to a large code repository. The upstream repository is forked and each planned feature is developed by a member of the team in a separate branch. Once a feature is completed, a pull request (PR) is opened for the whole team to discuss
the changes, and if accepted, merge the changes to the forked repository's main branch. Once merged, the main branch is deployed to the staging server for the client to validate new functionality. If the client signs off on the feature, another PR is opened to merge the changes into the main repository so the feature can be included in the production server. 

As a summary, the metrics we are going to analyze are:
- Each time a story is started in Pivotal Tracker, its corresponding branch in GitHub must be created.
- Each time a story is finalized in Pivotal Tracker, a corresponding Pull Request of the brach must be created.
- Each time a story is delivered in Pivotal Tracker, its corresponding Pull Request must be merged.
- When merge the brach the CI execution must be successful
- Each time a change is merged it must be released in heroku

## Prerequisites

### Create projects and tools
If you already have your tools setup you can skip this part.

First, you need to set up your different development tools:
 - Create Github Repository
 - Create Pivotal Project
 - Create Heroku App and enable automatic deploys ([Guide](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/guides/Heroku.md))
 - Create an action workflow to automate the continuous integration of your project. Here you can see a ([Hello World CI](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/.github/workflows/test.yml))

### Bluejay
 - Create info.yml file. For more details on how to set up your info.yml with the Wizard tool, you can go to this section below [Join in Bluejay's system](#join-in-bluejays-system).

### Governify auditor project invite
The Governify auditor should be present on the private tools in order to have access to your information:
 - GitHub: If your repository is public or it is present on your organization there is no need to add the auditor. If not, you'll need to add him by going to Settings→Manage access on your repository and click on the green button labeled as `Invite a collaborator`. Enter `governifyauditor` and accept.

![GH invite](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/auditor1.PNG?raw=true)

 - Pivotal Tracker: If your repository is public you don't need to add the auditor. If not, go to your project, click on members at the top and click on `Invite people`. Enter governify.auditor@gmail.com and add him.

![PT invite](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/auditor2.PNG?raw=true)

 - Heroku: You'll need to add the auditor as a collaborator. On your app dashboard view, click on `Access` at the top and then `Add collaborator`. Enter governify.auditor@gmail.com and save changes.

![H invite](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/auditor3.PNG?raw=true)

Bear in mind that you might need to wait for the Governify auditor to accept the invitations in order for the points to appear in the dashboard.

## Simulate golden flow
Make sure that your repository files look something like this before continuing:

![Files](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/repoReady.PNG?raw=true)

Now you can go ahead an simulate the Golden Flow.

### New branch - Started stories correlation
1. Create 4 stories on Pivotal Tracker by pressing the button `Add Story` on the top part of the column and click on the `Start` button on each to start them.
2. We are going to create 4 branches on GitHub from `main` branch. First, create one with a name of your choice.
3. Then, create 3 but this time including  in the name of the branch an ID of the four Pivotal Tracker stories created on step 1 (Check image below to see its location and the second image showing a branch name example based on the Pivotal Tracker Story ID).

`Pivotal Tracker ID location:`

![PT ID](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/golden1.PNG?raw=true)

`GitHub Branch name:`

![Github branch name](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/golden2.PNG?raw=true)

### Open PR - Finish story
4. Modify all the new branches adding some changes to them. 
5. Open 2 PR of the branches with the Pivotal Tracker story ID on the branch name.
6. Create another PR using the branch that doesn't have the Pivotal Tracker story ID on it.
7. Finish the 4 stories on Pivotal Tracker by clicking on the `Finish` button.

At this point, if we have configured the example CI, we can go to the actions tab of our repository and we will see how it has been executed 1 time for each PR
![actions](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/actions.PNG?raw=true)

### Merge PR - Deliver story
8. First, merge one PR having the Pivotal Tracker story ID on the branch name. 
9. Now, please check Heroku or wait 5 minutes to ensure it is deployed beforethe next step.
10. After the first PR is deployed, merge the another PR but this time the one that its name does not contain the Pivotal Tracker story ID.
11. Deliver the 4 stories by clicking on the `Deliver button`.

Again, once the changes in each PR have been merged, the CI will be executed again.

## Join in Bluejay's system
### Join Info.yml Wizard
The info.yml file is very important to be able to register our project in Bluejay, that's why we have to take special care to configure it correctly. For this purpose, a tool has been created with which we can generate them automatically to avoid possible errors. You can find it here [https://join.bluejay.governify.io/wizard](https://join.bluejay.governify.io/wizard)

![Wizard 1](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/wizard1.PNG?raw=true)

When we enter, we will see an example with the basic structure that our file should have. There is a first part where we can enter some basic information to identify our project such as Name, Owner and TeamID fields. Then we will have the 3 sections where we will define the rest of the information of the project, these sections are:

- Identities: In this section we will add the links to the Pivotal Tracker and Heroku projects that we have previously configured for our project.

- Notifications: Although not mandatory, this section is very important in order to receive feedback from the application and to know at all times the status of the project with respect to the practices analyzed. To do this we will add the url of our Slack hook (Warning, since this could be used by anyone with access to our repo, it is advisable to use the encryption system that the tool provides us to preserve privacy).
![Wizard 2](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/wizard2.PNG?raw=true)

- Members: Finally, in this section we will register the participating members of the project together with the user names used in the different management tools.

Once we have entered all our data we can download the file ready for our project by clicking on the button and we will be ready to upload it to our repo and proceed to join the project to Bluejay.

Another option if we already have a repository with an info.yml already created, would be to load it directly with the Load button and entering the url of our Github repository.

![Wizard 3](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/wizard3.PNG?raw=true)

If you have already created your info yml with an encrypted field but you don't know if you have entered it correctly or if there has been an error, you can use the [checker](https://join.bluejay.governify.io/checker) tool to check it quickly.

![Wizard 4](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/Checker.PNG?raw=true)

Just enter the actual value and the encryption you have and the tool will tell you if it is the right match.

### Joining to your course
Follow this steps:
1. Access to [https://join.bluejay.governify.io/](https://join.bluejay.governify.io/). This is the view for joining into the system and start the tools audition.

![Join 1](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/join1.PNG?raw=true)

2. Enter your Repository URL. For example, `https://github.com/governifyauditor/goldenflow-showcase-project` would be the URL of this Repository.
3. Click on Check. Once checked, any errors concerning your info.yml file will appear. Correct them if you have any. If no errors are found, you'll get a success message and a new section will appear.

![Join 2](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/join2.PNG?raw=true)

4. In the input enter a valid course code. Click on Register. If everything is ok, you will see a success and a badge will appear aswell as a markdown for adding it to your repo's README.md file. By clicking on the badge you will access to the dashboard. If you've already registered into the system you should see a message telling you so but the dashboard badge will be given so you can access the dashboard in case you lost it.

![Join 3](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/join3.PNG?raw=true)

The points should appear in 5 minutes or less. If you have any problem when accomplishing this section, you can contact us in our [Gitter](https://gitter.im/governify/community) for troubleshooting.

## Check results
After doing all of this, if the data has been calculated there should appear a new point for each metric:
- At least 75% of releases must match the merge of a PR into master within ten minutes: 2/2 = 100%
- At least 75% of Github Actions builds should pass correctly: 4/4 = 100%
- Correlation between new branches and started stories for the team: 3/4 = 75%
- Correlation between open pull request and finished stories for the team: 2/4 = 50%
- Correlation between merged pull requests and delivered stories for the team: 1/4 = 25%

The `Heroku releases` metric might have a different value if you didn't wait until a PR was deployed before merging a new one.

## Common Mistakes
To see possible common mistakes made and how to solve them go [here](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/guides/Common%20Mistakes.md)
