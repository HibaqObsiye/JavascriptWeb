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
    // let createID = section.createElement("div")
    // document.body.append(createID)
    // createID.id = "message"
    // createID.textContent = "This message displayed by Javascript"
    // document.body.append(createID)

    // console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;