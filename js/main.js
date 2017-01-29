const elements = document.querySelectorAll(".MyAccordion-title");
const url = 'https://quotes.rest/qod.json?category=inspire';

[].map.call(elements,(elem)=>{
	elem.addEventListener("click", collapse)
})

function collapse(){
	[].map.call(elements,(elem)=>{
		elem.nextElementSibling.className = "MyAccordion-content"
	})
	this.nextElementSibling.className = "MyAccordion-content--active";
}

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

getData(url, showQuote)