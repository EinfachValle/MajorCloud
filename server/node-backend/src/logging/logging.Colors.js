function current() {
  const timestamp = Date.now();
  const dateObject = new Date(timestamp);
  const date = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear();
  const hour = dateObject.getHours().toString().padStart(2, "0");
  const minute = dateObject.getMinutes().toString().padStart(2, "0");
  const second = dateObject.getSeconds().toString().padStart(2, "0");
  return `[${year}-${month}-${date} ${hour}:${minute}:${second}] `;
}

class Logger {
  constructor(message) {
    this.message = message;
  }

  info(message) {
    return current() + "\x1b[97;104m[INFO]\x1b[0m " + message;
  }

  warn(message) {
    return current() + "\x1b[37;103m[WARN]\x1b[0m " + message;
  }

  error(message) {
    return current() + "\x1b[37;101m[ERROR]\x1b[0m " + message;
  }

  highlight(message) {
    return "\x1b[95m" + message + "\x1b[0m";
  }

  dev(message) {
    return current() + "\x1b[37;103m[DEV]\x1b[0m " + message;
  }
}

module.exports = { Logger };
