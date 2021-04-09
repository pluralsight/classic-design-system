for FILE in $(git diff --name-only); do
  PACKAGE=`echo $FILE | sed "s|packages/\(.*\)/.*|\1|"`
  git add "$FILE"
  git commit -m "test($PACKAGE): rename to jest.config.mjs"
done
