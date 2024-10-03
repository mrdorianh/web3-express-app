const fs = require('fs');
const path = require('path');

// Read the depcheck result
const depcheckResult = JSON.parse(fs.readFileSync('depcheck_result.json', 'utf8'));

// Initialize package.json if it doesn't exist
let packageJson = {};
if (fs.existsSync('package.json')) {
  packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
}

// Ensure dependencies and devDependencies exist
packageJson.dependencies = packageJson.dependencies || {};
packageJson.devDependencies = packageJson.devDependencies || {};

// Helper function to add dependencies
const addDependency = (dep, isDev = false) => {
  const target = isDev ? packageJson.devDependencies : packageJson.dependencies;
  if (!target[dep]) {
    target[dep] = '*';
    console.log(`Added ${isDev ? 'dev ' : ''}dependency: ${dep}`);
  }
};

// Add missing dependencies
for (const dep in depcheckResult.missing) {
  // You may want to adjust this logic based on your project structure
  if (['chai', 'chai-http'].includes(dep)) {
    addDependency(dep, true);
  } else {
    addDependency(dep);
  }
}

// Write the updated package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('package.json has been updated with the correct dependencies.');
