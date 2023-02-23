class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl);
  }

  addParagraph(name){
    let newParagraph = document.createElement('p')
    newParagraph.textContent = name
    this.mainContainerEl.append(newParagraph)
    return newParagraph
  }

  clearParagraph(){
    let paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(element => {
      element.remove()
    })
  }
}

module.exports = View;