// creat function createLogger
// creat in function memory massage
"use strict";

const createLogger = () => {
  const memoryLoggers = [];
  function warn(text) {
    const warnMessage = {
      message: text,
      dateTime: new Date(),
      type: "warn",
    };
    memoryLoggers.push(warnMessage);
  }

  function error(text) {
    const errorMessage = {
      message: text,
      dateTime: new Date(),
      type: "error",
    };
    memoryLoggers.push(errorMessage);
  }

  function log(text) {
    const logMessage = {
      message: text,
      dateTime: new Date(),
      type: "log",
    };
    memoryLoggers.push(logMessage);
  }

  const getRecords = (loggerType = "not Found") => {
    if (loggerType !== "not Found") {
      const memoryFilter = memoryLoggers.filter((element) => {
        if (element.type === loggerType) {
          return element;
        }
      });
      return memoryFilter.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memoryLoggers.sort((a, b) => b.dateTime - a.dateTime);
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords("log")); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords("error")); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords("warn")); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn("Opps, something is happenning");
console.log(logger2.getRecords("error")); // ===> []
console.log(logger2.getRecords("warn")); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords("error")); // ===> []
console.log(logger3.getRecords()); // ===> []
