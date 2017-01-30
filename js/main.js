myAccordion.init()

getData('https://quotes.rest/qod.json?category=inspire', showQuote)

function showQuote(data) {
	if(data.contents){
		const quote = data.contents.quotes[0].quote
		const author = data.contents.quotes[0].author
		document.querySelector('.quote').innerHTML = quote
		document.querySelector('.author').innerHTML = author
	} else {
		document.querySelector('.quote').innerHTML = data.error.message
	}
}

