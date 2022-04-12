
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
 //api doesn't work properly
fetch(`https://api.spoonacular.com/recipes/information?apiKey=0982c029a4d04bb5b43ac973cac0a1bd&ingredients=${searchInputText}`)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)

  // for (var i = 0; i < data.length; i++) {
    //Creating a h3 element and a p element
    var userName = document.createElement('h3');
    var userUrl = document.createElement('img');

    //Setting the text of the h3 element and p element.
    userName.textContent = data.title;
    userUrl.src = data.image;

    //Appending the dynamically generated html to the div associated with the id="users"
    //Append will attach the element as the bottom most child.
    document.getElementById('link').append(userName, userUrl)
    
  // }
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