const myAccordion = {
	elements: document.querySelectorAll(".MyAccordion-title"),
	init: function(){
		[].map.call(this.elements,(elem)=>{
			elem.addEventListener("click", this.collapse)
		})
	},
	collapse: function(){
		[].map.call(myAccordion.elements,(elem)=>{
			elem.nextElementSibling.className = "MyAccordion-content"
		});
		this.nextElementSibling.className = "MyAccordion-content--active";
	}
}


