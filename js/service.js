function getData(url, callback) {
	fetch(url)
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			callback(json)
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
}
