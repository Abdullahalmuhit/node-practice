const fs = require('fs');
const man = require('./man');
// // write file
// fs.writeFileSync('filesystem1.txt', man.array1);
// // append file
// fs.appendFile('filesystem1.txt', man.name + man.age, (err) => {
//     if (err) throw err;
//     console.log('Saved!');
// });
// read file
fs.readFile('filesystem1.txt', (err, data) => {
    console.log(data.toString());
});

console.log('muhit');
