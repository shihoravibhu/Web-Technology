//  3. Demonstrate “fs” core module in NodeJS. (A)

const fs = require('fs');

console.log('File System module demo : ');

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

console.log(fs.readFileSync('example.txt', 'utf8'));  // Reading file synchronously
console.log(fs.existsSync('example.txt'));  // Checking if file exists

console.log(fs.statSync('example.txt'));  // Getting file stats
console.log(fs.readdirSync('.'));  // Reading directory contents