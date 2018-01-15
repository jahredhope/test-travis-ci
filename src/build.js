const fs = require('fs');
const path = require('path');

const someValues = require('some-values');

const a = someValues();

console.log('Running build.js');
try {
  const fileContents = fs.readFileSync(path.join(__dirname, 'build.txt'), 'utf8');
  console.log('Build File:', fileContents);
} catch (error) {
  console.log('No build file');
}

try {
  fs.writeFileSync(path.join(__dirname, 'build.txt'), 'build file from build.js');
  console.log('Created build file');
} catch (error) {
  console.log('Unable to create build file', error);
}
