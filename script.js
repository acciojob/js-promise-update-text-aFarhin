// Get a reference to the output element
const outputElem = document.getElementById('output');

// Create a promise that resolves after 1 second with a string
const delayPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!');
  }, 1000);
});

// Handle the result of the promise
delayPromise
  .then((result) => {
    // Update the text of the output element
    outputElem.innerText = result;
    // Test if the text of the output element was updated correctly
    if (outputElem.innerText !== result) {
      throw new Error('Text not updated correctly');
    }
  })
  .catch((error) => {
    console.error(error);
  });
