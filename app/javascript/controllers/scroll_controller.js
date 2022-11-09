import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // on mount
  connect() {
    console.log("Connected");
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    this.resetScroll(messages);
  }

  // on unmount
  disconnect() {
    console.log("Disconnected");
  }

  resetScroll() {
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
}
