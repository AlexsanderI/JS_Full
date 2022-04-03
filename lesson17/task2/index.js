const callbackPrompt = {
  message: "Tell me your number",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(min) {
    setTimeout(this.showPrompt.bind(this), min);
  },
};

callbackPrompt.showPrompt(1);
