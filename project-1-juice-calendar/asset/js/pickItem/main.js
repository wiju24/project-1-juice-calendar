var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerView: "auto",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

let search = $('#searchBtn');
let searchInput = $('#userInput');
let cardSection = $('#card');

let monday= $('#mon');
let tuesday = $('#tue');
let wednesday = $('#wed');
let thursday = $('#thu');
let friday = $('#fri');
let Saturday = $('#sat');
let sunday = $('sun');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b1f76fb02msha0c423d7d3505d1p18cf8ajsne20c5084d38e',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

function getApi(item) {
	let url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${item} smoothie`
fetch(url, options)
.then(function (response) {
	return response.json();
  })
  .then(function (data) {

	console.log(data);

	for(let i = 0; i < 5; i++){
		
		let options = $(`#opt${i+1}`);
		let calories = $(`#cal${i+1}`);
		let save = $(`#save${i+1}`);

		options.text(`${data.hits[i].recipe.label}`);
		calories.text(`The calories:${Math.round(data.hits[i].recipe.calories)}`);

		

		function getContent(){
			let content = {
				name:data.hits[i].recipe.label,
				calories:Math.round(data.hits[i].recipe.calories)
			}

			function save1(){
				localStorage.setItem('mon',JSON.stringify(content))
				console.log(content);
			}
			monday.click(save1);

			function save2(){
				localStorage.setItem('tue',JSON.stringify(content))
				console.log(content);
			}
			tuesday.click(save2);

			function save3(){
				localStorage.setItem('wed',JSON.stringify(content))
				console.log(content);
			}
			wednesday.click(save3);

			function save4(){
				localStorage.setItem('thu',JSON.stringify(content))
				console.log(content);
			}
			thursday.click(save4);

			function save5(){
				localStorage.setItem('fri',JSON.stringify(content))
				console.log(content);
			}
			friday.click(save5);

			function save6(){
				localStorage.setItem('sat',JSON.stringify(content))
				console.log(content);
			}
			Saturday.click(save6);

			function save7(){
				localStorage.setItem('sun',JSON.stringify(content))
				console.log(content);
			}
			sunday.click(save7);

		}

		save.click(getContent);
		




		let rLength = data.hits[i].recipe.ingredientLines.length;
		console.log(rLength);

		for(let i=0; i < rLength; i++){

			let recipeText = $(`#r${i+1}`);
			recipeText.text(`${data.hits[i].recipe.ingredientLines[i]} ...`);

		}


		
	}
  }
  );
}


let submitEvent = function (event){
	
	cardSection.css('visibility','visible')
	event.preventDefault();
	
	console.log(event);
	let item = searchInput.val().trim().toLowerCase();
	if(item){
		getApi(item);
		localStorage.setItem('item',JSON.stringify(item));
		searchInput.value = '';
	}else{
		alert('item not found')
	}
}



search.click(submitEvent);