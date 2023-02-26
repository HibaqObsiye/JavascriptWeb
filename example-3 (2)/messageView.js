class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    let section = document.querySelector('#main-container')
      let newDiv = document.createElement('div')
      newDiv.id = "message"
      newDiv.textContent = "This message is displayed by Javascript"
      section.appendChild(newDiv)
  }

  removeMessage(){
    
  }
}

module.exports = MessageView;