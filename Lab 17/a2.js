//  2. Demonstrate “path” core module in NodeJS. (A)

const path = require('path');

console.log("Path module demonstration:\n");

console.log("path.normalize : ", path.normalize('Lab 17/../a2.js'));

console.log("path.join : ", path.join('a2.js', 'a3.js'));

console.log("path.resolve : ", path.resolve('Lab 17', 'a2.js'));

console.log(
  "path.relative : ",
  path.relative(
    '/Users/shiho/Desktop/DU/Sem 3/Web Technology/Lab 17',
    '/Users/shiho/Desktop/DU/Sem 3/Web Technology/Lab 17/a2.js'
  )
);

console.log(
  "path.dirname : ",
  path.dirname('Lab 17/a2.js')
);

console.log(
  "path.basename : ",
  path.basename('/Users/shiho/Desktop/DU/Sem 3/Web Technology/Lab 17/a2.js')
);

console.log(
  "path.extname : ",
  path.extname('/Users/shiho/Desktop/DU/Sem 3/Web Technology/Lab 17/a2.js')
);
