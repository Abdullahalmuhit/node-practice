const EventEmetter = require('events');

const emitter = new EventEmetter();
emitter.on('Rich', (value) => {
    console.log(value);
});

emitter.emit('Rich', 'get gf');
