//<a class="waves-effect waves-light btn-large" href="#">Wave</a>

//var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
var ingredientsList = document.getElementById('ingredients-input')
// console.log(ingredientsList)
// console.log(fetchButton)

fetchButton.addEventListener('click', getiIngredientsList);

function getiIngredientsList(event){
  event.preventDefault();
  var searchInputText = document.getElementById('ingredients-input').value.trim();
 console.log(searchInputText);
fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=414afb9d3ee94e3db1c1540d721fe959&ingredients=${searchInputText}`)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
});
}
//getiIngredientsList();


// function getApi(){
//     var myRequestUrl = 'https://api.spoonacular.com/recipes/716429/information?apiKey=c1d66c1338404c7795af5ea7c1401af3&ingredients=';
//     var myIngredient = ingredientsList;
//     var requestUrl = myRequestUrl + myIngredient;
//     // console.log(requestUrl)
    
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.length; i++) {
//       var titleItem = document.createElement('title')
//       listTitle.textContent = data [i].title;
//       repoList.appendChild(listTitle)
      
      
//     }
//    // console.log(data)
// })
// }
// getApi();
// // fetchButton.addEventListener('click', getApi)