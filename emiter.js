const School = require('./emiter2');

const school1 = new School();
school1.on('Rich', (value) => {
    console.log(value);
});
school1.school();
