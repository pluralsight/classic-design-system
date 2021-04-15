for FILE in $(git diff --name-only); do
  PACKAGE=`echo $FILE | sed "s|packages/\(.*\)/.*|\1|"`
  git add "$FILE"
  git commit -m "fix($PACKAGE): properly order the conditional exports in package"
done
