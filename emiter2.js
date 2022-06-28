const EventEmetter = require('events');

class School extends EventEmetter {
    school() {
        this.emit('Rich', 'get gf');
    }
}

module.exports = School;
