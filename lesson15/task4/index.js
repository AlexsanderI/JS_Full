const createLogger = () => {
  const memoryLoggers = [];
  function warn(text) {
    const warnObj = {
      message: text,
      dateTime: new Date(),
      type: "warn",
    };
    memoryLoggers.push(warnObj);
  }

  function error(text) {
    const errorObj = {
      message: text,
      dateTime: new Date(),
      type: "error",
    };
    memoryLoggers.push(errorObj);
  }

  function log(text) {
    const logObj = {
      message: text,
      dateTime: new Date(),
      type: "log",
    };
    memoryLoggers.push(logObj);
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

const logger = createLogger();
logger.log("User was logged in");
logger.warn("User try  to restricted this page");
logger.log("User was logged out");
logger.error("Unexpected error on this web-site");
console.log(logger.getRecords());
console.log(logger.getRecords("log"));
console.log(logger.getRecords("error"));
console.log(logger.getRecords("warn"));
console.log(logger.getRecords());

let obg = {
  name: "Vasya",
  age: 18,
};
console.log(obg);
