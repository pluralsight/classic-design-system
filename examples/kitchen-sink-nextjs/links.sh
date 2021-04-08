echo "Removing node_modules/@pluralsight..."
rm -rf node_modules/@pluralsight
mkdir -p node_modules/@pluralsight
for packageName in $(ls -1 ../design-system/packages); do
  echo "Copying $packageName..."
  cp -R ../design-system/packages/$packageName node_modules/@pluralsight/ps-design-system-$packageName
done
