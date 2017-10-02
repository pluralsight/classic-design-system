## Run locally

```
nvm use
npm install 
npm start
```

## Deploy

One-time setup:

```
heroku create ps-design-system-notifier
heroku buildpacks:set -a ps-design-system-api https://github.com/Pagedraw/heroku-buildpack-select-subdir
heroku config:add BUILDPACK='packages/packages-notifier=https://github.com/heroku/heroku-buildpack-nodejs#v83' -a ps-design-system-notifier
heroku git:remote -a ps-design-system-notifier
heroku config:push
heroku addons:create scheduler:standard
```

Every commit:

```
git push heroku master
```
