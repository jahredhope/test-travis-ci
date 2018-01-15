const fs = require('fs');
const path = require('path');

console.log('Running test.js');

try {
  const fileContents = fs.readFileSync(path.join(__dirname, 'build.txt'), 'utf8');
  console.log('Build File:', fileContents);
} catch (error) {
  console.log('No build file');
}
