const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a lintener
emitter.on('bellRing',  () => { 
    console.log("I have finish the worked.");
});
// Rise an event
setTimeout(() => {
    emitter.emit('bellRing');
}, 2000);

