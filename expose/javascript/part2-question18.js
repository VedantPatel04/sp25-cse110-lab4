function printTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(timeString);
  }

  printTime();
  setInterval(printTime, 1000);
  