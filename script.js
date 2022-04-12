//Youtube API Section
$(document).ready(function(){

    var YT_API_KEY = "AIzaSyCdW681Kz4w_rDae_Fv7q4LsCNcPZinsLM";

    //Spare Key:
    //AIzaSyCn4UetsSP0U1ys0I-Nse8icG5ybu9dnmc

    var video = '';


    $("#recipes").submit(function(event){
        event.preventDefault()
        alert("form is submitted")
        var search = $("#search").val()

        videoSearch(YT_API_KEY, search, 4)
    });

    function videoSearch(key,search, maxResults) {

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults" + maxResults + "&q=" + search, function(data){
            console.log(data)

            data.items.forEach(item =>  {
                video = `
                <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `

                $("#videos").append(video)
            });



        })

    }


});


//Spoonacular API Section
// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');
// var ingredientsList = document.getElementById('ingredients-input')
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
