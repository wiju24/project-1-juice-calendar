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
	  let box = document.createElement('div');
      box.setAttribute ('class','box');
	  main.append(box)
	  let userName = document.createElement('div');
	  let img = document.createElement('div');

	  let ingLength = data.hits[i].recipe.ingredientLines.length
	  console.log(ingLength)

		userName.textContent =`The calories:${Math.round(data.hits[i].recipe.calories)}`; 
		console.log(data.hits[i].recipe.calories)
		img.textContent = `Name: ${data.hits[i].recipe.label}`;

	
	box.append(img)
	box.append(userName);

	for(let i=0; i<ingLength; i++){
		let ing = document.createElement('div');
		ing.textContent = data.hits[i].recipe.ingredientLines[i];
		box.append(ing);
	}

	}
  }
  );
}



let submitEvent = function (event){
	event.preventDefault();
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


  