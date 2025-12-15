<<<<<<< HEAD
const EventEmitter = require('events')

const emmiter = new EventEmitter()

emmiter.on('greet', (name) => {
    console.log(`Hello ${name}`)
});

=======
const EventEmitter = require('events')

const emmiter = new EventEmitter()

emmiter.on('greet', (name) => {
    console.log(`Hello ${name}`)
});

>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
emmiter.emit('greet', 'Vishal')