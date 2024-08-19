const {EventEmitter} = require("events")

const first_emitter = new EventEmitter()

first_emitter.emit("my first nodeJS emitter event")

