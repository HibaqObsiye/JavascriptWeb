class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button')

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    let section = document.querySelector('#main-container')
      let newDiv = document.createElement('div')
      newDiv.id = "message"
      newDiv.textContent = "This message is displayed by Javascript"
      section.appendChild(newDiv)
  }

  hideMessage(){
    const element = document.getElementById("message")
    element.remove()
  }
}

module.exports = MessageView;