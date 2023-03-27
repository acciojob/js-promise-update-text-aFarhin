//your JS code here. If required.
function delayInHello() {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve('Hello, world!');
				}, 1000);
			});
		}

		delayInHello().then((message) => {
			const outputElement = document.getElementById('output');
			outputElement.textContent = message;
		});