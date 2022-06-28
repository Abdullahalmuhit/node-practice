const fs = require('fs');
const man = require('./man');

fs.writeFileSync('filesystem1.txt', man.array1);
fs.appendFile('filesystem1.txt', man.name + man.age, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
