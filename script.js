//your JS code here. If required.

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
    outputElem.innerText = result;
  })
  .catch((error) => {
    console.error(error);
  });

