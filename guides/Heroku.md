# Heroku config

## Create Heroku app
First you need to enter Heroku and sign up by filling the form. 

Once logged in, you will need to click `New` on the right side of the screen and select `Create new app`.
![Heroku](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/heroku1.PNG?raw=true)

Choose a name for your app and a region and click on `Create app`. 

## Add Procfile and index.js
We will create a basic node.js app just to make Heroku detect the code and "deploy" it.

### package.json
First we have to create a file named `package.json` containing the following:
```
{
  "name": "testing-goldenflow",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index"
  }
}
```
This will indicate to heroku that the project is a node.js project.

### index.js
Add a file named `index.js` to the root of your repository containing the following:
```
console.log("This is a project for simulating the Golden Flow")
```
It is only a console print but it will be enought for this case. 

### Procfile
Add a file named `Procfile` to the root of your repository containing the following
```
web: node index.js
```
It orders Heroku to run node index.js when deploying. 

## Configure Heroku automatic deploys
Once your app is created, you'll need to setup automatic deploys. First you have to go to the `Deploy` tab at the top and look for the `Deployment method` section. Then, click on the `Connect to GitHub` button to connect Heroku with GitHub.
![Heroku](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/heroku2.PNG?raw=true)

To enable automatic deploys navigate to the `Automatic deploys` section and select the branch you're willing to deploy automatically and click `Enable automatic Deploys` to finish setup. You can optionally mark `Wait for CI to pass before deploy` on if you want that behaviour on your pipeline.
![Heroku](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/heroku3.PNG?raw=true)
