class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    let section = document.querySelector('#main-container')
    let createID = section.createElement("div")
    createID.id = "message"
    createID.textContent = "This message displayed by Javascript"

    // console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;