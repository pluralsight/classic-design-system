echo "Removing node_modules/@pluralsight..."
rm -rf node_modules/@pluralsight
mkdir -p node_modules/@pluralsight
for packageName in $(ls -1 ../../packages); do
  echo "Copying $packageName..."
  cp -R ../../packages/$packageName node_modules/@pluralsight/ps-design-system-$packageName
done
