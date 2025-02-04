const fs = require('fs');

const packageJsonPath = './dist/package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Remove fields that are not needed in the published package
delete packageJson.devDependencies;
delete packageJson.scripts;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('prepare-publish.js: package.json has been updated');
