const EventEmitter = require('events')

const emmiter = new EventEmitter()

emmiter.on('greet', (name) => {
    console.log(`Hello ${name}`)
});

emmiter.emit('greet', 'Vishal')