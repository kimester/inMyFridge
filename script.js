//Youtube API Section
$(document).ready(function(){

    var YT_API_KEY = "AIzaSyCdW681Kz4w_rDae_Fv7q4LsCNcPZinsLM";

    //Spare Key:
    //AIzaSyCn4UetsSP0U1ys0I-Nse8icG5ybu9dnmc

    var video = '';


    $("#recipes").submit(function(event){
        event.preventDefault()
        //alert("form is submitted")
        var search = $("#search").val()
    
      videoSearch(YT_API_KEY, search, 4)
        getiIngredientsList(search)
    });

    function videoSearch(key,search, maxResults) {

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults" + maxResults + "&q=" + search + "recipes", function(data){
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

// fetchButton.addEventListener('click', getiIngredientsList);

// function getiIngredientsList(event){
//   event.preventDefault();
//   var searchInputText = document.getElementById('ingredients-input').value.trim();
//  console.log(searchInputText);
 //api doesn't work properly

 function getiIngredientsList(searchInputText)
 { //SA: Testing this change , otherwise delete this line and uncomment from 51-56
fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=0982c029a4d04bb5b43ac973cac0a1bd&ingredients=${searchInputText}&number=2`)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)

  for (var i = 0; i < data.length; i++) {
    //Creating a h3 element and a p element
    var userName = document.createElement('h3');
    var userUrl = document.createElement('img');
  

    //Setting the text of the h3 element and p element.
    userName.textContent = data[i].title;
    userUrl.src = data[i].image;

   
  // var ingredients =data[i].usedIngredients[0];
            // for(i=0;i<data[i].usedIngredients[0].length;i++)
            // {
            //   var recipeList = document.createElement('h3');
            //   recipeList.textContent=data[i].usedIngredients[0][i];
            //   document.getElementById('recipe').append(recipeList)
            // }
//recipeList.textContent
    //Appending the dynamically generated html to the div associated with the id="users"
    //Append will attach the element as the bottom most child.
    document.getElementById('recipe').append(userName, userUrl)
    
   }
});
 }

