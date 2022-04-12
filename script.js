<a class="waves-effect waves-light btn-large" href="#">Wave</a>



$(document).ready(function(){

    var API_KEY = "AIzaSyCn4UetsSP0U1ys0I-Nse8icG5ybu9dnmc"

    var video = ''

    $("#recipes").submit(function(event){
        event.preventDefault()
        alert("form is submitted")
        var search = $("#search").val()

        videoSearch(API_KEY,search,10)
    })

    function videoSearch(key,search, maxResults) {

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults" + maxResults + "&q=" + search, function(data){
            console.log(data)

            data.items.forEach(item =>  {
                video = `

                <iframe width="560" height="315" src="https://www.youtube.com/embed/EAyo3_zJj5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `

                $("#videos").append(video)
            });



        })

    }


})


//var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
var ingredientsList = document.getElementById('ingredients-input')
// console.log(ingredientsList)
// console.log(fetchButton)

fetchButton.addEventListener('click', getIngredientsList);

function getIngredientsList(event){
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
//getIngredientsList();


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

