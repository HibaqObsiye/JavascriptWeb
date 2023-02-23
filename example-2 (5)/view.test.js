/**
 * @jest-environment jsdom
 */
//the comment above this tells jest that the code we are testing is intended to be run in the browser.
const fs = require('fs'); //Node built-in fs module which lets us read non-javascript files
const View = require('./view'); //require our view class

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html'); //set body.innerHTML to have the same content of the real web page as jest mocks the html content.

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });
});

describe('addParagraph', () =>{
  document.body.innerHTML = fs.readFileSync('./index.html')
  const view = new View()
  view.addParagraph('hello everyone')
  expect(document.querySelectorAll('p').length).toBe(3)
})