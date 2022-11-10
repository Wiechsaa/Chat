import consumer from "channels/consumer";

let resetFunc;
let timer = 0;

consumer.subscriptions.create("AppearanceChannel", {
  initialized() {},

  connected() {
    console.log("Connected");
    resetFunc = () => {
      this.resetTimer(this.uninstall);
    };
    this.install();
    window.addEventListener("turbo:load", () => {
      this.resetTimer();
    });
  },

  disconnected() {
    console.log("Disconnected");
    this.uninstall();
  },

  rejected() {
    console.log("Rejected");
    this.uninstall();
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  },

  online() {
    console.log("Online");
    this.perform("online");
  },

  offline() {
    console.log("Offline");
    this.perform("offline");
  },

  away() {
    console.log("Away");
    this.perform("away");
  },

  uninstall() {
    const shouldRun = document.getElementById("appearance_channel");
    if (!shouldRun) {
      clearTimeout(timer);
      this.perform("offline");
    }
  },
  install() {
    console.log("Install");

    window.removeEventListener("load", resetFunc);
    window.removeEventListener("DOMContentLoaded", resetFunc);
    window.removeEventListener("Click", resetFunc);
    window.removeEventListener("keydown", resetFunc);

    window.addEventListener("load", resetFunc);
    window.addEventListener("DOMContentLoaded", resetFunc);
    window.addEventListener("Click", resetFunc);
    window.addEventListener("keydown", resetFunc);
    this.resetTimer();
  },
  resetTimer() {
    this.uninstall();
    const shouldRun = document.getElementById("appearance_channel");

    if (!!shouldRun) {
      this.online();
      clearTimeout(timer);
      const timeInSeconds = 10;
      const milliseconds = 1000;
      const timeInMilliseconds = timeInSeconds * milliseconds;

      timer = setTimeout(this.away.bind(this), timeInMilliseconds);
    }
  },
});
