const _ = require('lodash');
const os = require('os');
const man = require('./man');

const a = 10;
console.log(_.last(man.array1));
console.log(man.family(a));
console.log(os.platform());
console.log(os.uptime());
