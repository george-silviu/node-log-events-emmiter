// Simple log EVENT EMMITER
// HOW TO EMMIT CUSTOM EVENTS?
// HOW RESPOND TO THOSE EVENTS WHEN THEY ARE EMMITED?

const { logEvents } = require("./logEvents");
const EventEmmiter = require("events");

class MyEmmiter extends EventEmmiter {}

//initialize object
const myEmmiter = new MyEmmiter();

//add listener for log event
myEmmiter.on("log", (msg) => logEvents(msg));

//create a timeout to emmit the log event with some delay
setTimeout(() => {
  //emit event with a message
  myEmmiter.emit("log", "Log event emmited!");
}, 2000);
