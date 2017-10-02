## Deploy

One-time setup:

```
heroku create ps-design-system-api
heroku buildpacks:set -a ps-design-system-api https://github.com/Pagedraw/heroku-buildpack-select-subdir
heroku config:add BUILDPACK='packages/packages-api=https://github.com/heroku/heroku-buildpack-nodejs#v83' -a ps-design-system-api
heroku git:remote -a ps-design-system-api
heroku config:push
```

Every commit:

```
git push heroku master
```
