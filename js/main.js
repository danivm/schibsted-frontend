const elements = document.querySelectorAll("dt");

[].map.call(elements,(elem)=>{
	elem.addEventListener("click", collapse)
})

function collapse(){
	[].map.call(elements,(elem)=>{
		elem.nextElementSibling.className = ""
	})
	this.nextElementSibling.className = "active";
}

function showQuote(data) {
	const oData = JSON.parse(data) 
	if(oData.contents){
		const quote = oData.contents.quotes[0].quote
		const author = oData.contents.quotes[0].author
		document.querySelector('.quote').innerHTML = quote
		document.querySelector('.author').innerHTML = author
	} else {
		document.querySelector('.quote').innerHTML = oData.error.message
	}
}

getData(showQuote)