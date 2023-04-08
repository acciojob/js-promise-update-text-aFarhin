//your JS code here. If required.
// function delayInHello() {
// 			return new Promise((resolve) => {
// 				setTimeout(() => {
// 					resolve('Hello, world!');
// 				}, 1000);
// 			});
// 		}

// 		delayInHello().then((message) => {
// 			const outputElement = document.getElementById('output');
// 			outputElement.textContent = message;
// 		});

function delayInHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello');
        }, 1000);
    });
}

function addWorld(message) {
    return new Promise((resolve) => {
        resolve(message + ', world!');
    });
}

delayInHello()
    .then(addWorld)
    .then((message) => {
        const outputElement = document.getElementById('output');
        outputElement.textContent = message;
    });
