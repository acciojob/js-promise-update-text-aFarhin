//your JS code here. If required.
function call(){
	return new Promise(function (resolve,reject) {
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	
	});
}


call().then(function (data) {
	const div = document.getElementById('output')
    div.innerHTML = data;
})