const fs = require('fs');
const path = require('path');

// Define the directories
const directories = [
  'client/src/components',
  'client/src/pages',
  'client/src/services',
  'client/src/utils',
  'client/src/styles',
  'client/public',
  'server/src/controllers',
  'server/src/models',
  'server/src/routes',
  'server/src/services',
  'server/src/utils',
  'server/config',
  'database/migrations',
  'public/images',
  'tests',
  'docs'
];

// Create directories
directories.forEach(directory => {
  const dirPath = path.join(__dirname, directory);
  fs.mkdirSync(dirPath, { recursive: true });
});

// Define the files
const files = [
  { name: 'client/src/App.js', content: '// Root component' },
  { name: 'server/src/index.js', content: '// Entry point' },
  { name: 'public/index.html', content: '<!-- Main HTML file -->' },
  { name: '.gitignore', content: 'node_modules/\n.env' },
  { name: 'README.md', content: '# Project README' },
  { name: 'package.json', content: '{ "name": "your-project-name", "version": "1.0.0", "scripts": { "start": "node server/src/index.js" }, "dependencies": {} }' }
];

// Create files
files.forEach(file => {
  const filePath = path.join(__dirname, file.name);
  fs.writeFileSync(filePath, file.content);
});

console.log('Package structure created successfully!');
