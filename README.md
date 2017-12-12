# redux-boot

React and Redux simple boilerplate

## Local development

To start local server, simply run

```
npm start
```

from console. Your app should be now running on `http://localhost:3000` and you
will be able to see it from your web browser. To debug Redux actions, navigate
to `http://remotedev.io/local/` and you will be able to see all your Redux
actions.

## Publishing to GitHub pages

Open your package.json and add a homepage field for your project:

```diff
{
  "name": "redux-boot",
  "version": "0.0.1",
-  "homepage": "https://deathbeam.github.io/redux-boot",
+  "homepage": "https://myusername.github.io/my-app",
```
or for a GitHub user page:
```diff
{
  "name": "redux-boot",
  "version": "0.0.1",
-  "homepage": "https://deathbeam.github.io/redux-boot",
+  "homepage": "https://myusername.github.io",
```

If you are deploying to a GitHub user page instead of a project page you'll need
to make two additional modifications:

First, change your repository's source branch to be any branch other than
master.
Additionally, tweak your package.json scripts to push deployments to master:
```diff
"scripts": {
  "predeploy": "npm run build",
-  "deploy": "gh-pages -d build",
+  "deploy": "gh-pages -b master -d build",
```

Note that if you are setting up a Project Pages site and not using a custom
domain (i.e. your site's address is `username.github.io/repo-name`), then you need
to set `segmentCount` to `1` in the `public/404.html` file in order to keep `/repo-name` in the
path after the redirect.

Finally, make sure GitHub Pages option in your GitHub project settings is set to
use the gh-pages branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

After all above setup is done, simply run

```
npm run deploy
```

from console, enter user name and password and your website should be fully
working and deployed to GitHub pages.
