# Travis config

## Add Travis to your GitHub Repository
First you need to enter Travis and sign in using your GitHub account. 

Once logged in, you have to click on the `+` symbol at the left of the screen next to `My Repositories`.
![Golden Flow Diagram](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/travis1.PNG?raw=true)

Now click on the blue button `Sync account` on the left side of the screen to make sure your repository will apear when filtering. 
![Golden Flow Diagram](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/travis2.PNG?raw=true)

Use the `Filter repositories` search bar to look for your repository. Once it appears, click on the switch and make sure it is on.
![Golden Flow Diagram](https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/img/travis3.PNG?raw=true)

## Configure Travis with the simplest workflow
To configure Travis, you'll just need to add a file. The file we are showing here is a simple one that it will always pass but you can use it to check if the Travis integration is working. 

Create a file called `.travis.yml` on the root of your repository with the following contente:

```
language: node_js
node_js:
  - "10"
sudo: required

script:
  - exit 0
```

Add, commit and push this file to GitHub and you should see a successful workflow on Travis-CI page. 