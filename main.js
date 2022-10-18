let main = document.querySelector('#main');
let searchInput = document.querySelector('#item');
let submit = document.querySelector('#submit');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd14bf10e97msh3cfe6ec7fd0a476p1b1fe0jsnce627f4206cf',
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
	  let box = document.createElement('button');
      box.setAttribute ('class','box');
	  box.setAttribute ('id','boxes');
	  main.append(box)
	let ingLength = data.hits[i].recipe.ingredientLines.length;
	let userName =`The calories: ${Math.round(data.hits[i].recipe.calories)}`;
	let img = `- ${data.hits[i].recipe.label}`;
		box.append(img+userName)
		


	for(let i=0; i<ingLength; i++){
	let ing = data.hits[i].recipe.ingredientLines[i];
	box.append(ing)
	}
	box.addEventListener('click',selectedButton);
	}
	function selectedButton(e){ 
		
		let selectedRecipe = e.target.innerText
		console.log(selectedRecipe)
		
		let Monday = document.createElement('button');
		Monday.setAttribute ('class','box');
		Monday.append('Monday');
		Monday.addEventListener('click', localMonday)
	function localMonday(){
		localStorage.setItem('Monday', selectedRecipe);
		main.remove()
	}
		let Tuesday = document.createElement('button');
		Tuesday.setAttribute ('class','box');
		Tuesday.append('Tuesday');
		Tuesday.addEventListener('click', localTuesday)
	function localTuesday(){
		localStorage.setItem('Tuesday', selectedRecipe);
		main.remove()
	}
		let Wednesday = document.createElement('button');
		Wednesday.setAttribute ('class','box');
		Wednesday.append('Wednesday');
		Wednesday.addEventListener('click', localWednesday)
	function localWednesday(){
		localStorage.setItem('Wednesday', selectedRecipe);
		main.remove()
	}
		let Thursday = document.createElement('button');
		Thursday.setAttribute ('class','box');
		Thursday.append('Thursday');
		Thursday.addEventListener('click', localThursday)
	function localThursday(){
		localStorage.setItem('Thursday', selectedRecipe);
		main.remove()
	}
		let Friday = document.createElement('button');
		Friday.setAttribute ('class','box');
		Friday.append('Friday');
		Friday.addEventListener('click', localFriday)
	function localFriday(){
		localStorage.setItem('Friday', selectedRecipe);
		main.remove()	
	}
		let Saturday = document.createElement('button');
		Saturday.setAttribute ('class','box');
		Saturday.append('Saturday');
		Saturday.addEventListener('click', localSaturday)
	function localSaturday(){
		localStorage.setItem('Saturday', selectedRecipe);
		main.remove()
	}
		let Sunday = document.createElement('button');
		Sunday.setAttribute ('class','box');
		Sunday.append('Sunday');
		Sunday.addEventListener('click', localSunday)
	function localSunday(){
		localStorage.setItem('Sunday', selectedRecipe);
		main.remove()
	}
		main.append(Monday)
		main.append(Tuesday)
		main.append(Wednesday)
		main.append(Thursday)
		main.append(Friday)
		main.append(Saturday)
		main.append(Sunday)
	
	}
	
}
  )
}





let submitEvent = function (event){
	console.log(event);
	let item = searchInput.value.trim().toLowerCase();
	if(item){
		getApi(item);
		localStorage.setItem('item',JSON.stringify(item));
		searchInput.value = '';
	}else{
		alert('item not found')
	}
}

submit.addEventListener('click',submitEvent);


