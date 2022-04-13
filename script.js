
//Spoonacular API Section
$(document).ready(function(){

var fetchButton = document.getElementById('fetch-button');

fetchButton.addEventListener('click', getiIngredientsList);

 function getiIngredientsList(event){
  event.preventDefault();
  var searchInputText = document.getElementById('ingredients-input').value.trim();

 console.log(searchInputText);
 

 
    var Spoon_API_Key = "caf4ab2a47054816a81bf757a283f48a"
    //Spare Spoon Keys:
    //0982c029a4d04bb5b43ac973cac0a1bd
    //a6bc0cdd81484675bded0d13edae9d8
    //0982c029a4d04bb5b43ac973cac0a1bd
    //0982c029a4d04bb5b43ac973cac0a1bd
 
 fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=` + Spoon_API_Key + `&query=${searchInputText}`)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)


  for (var i = 0; i < 5 ; i++) {
    var myRecipe = document.createElement('h3');
    var myDish = document.createElement('img');
    

    myRecipe.textContent = data.results[i].title;
    myDish.src = data.results[i].image;
    

    $('#link').append(myRecipe);
    $('#link').append(myDish);

    console.log(myRecipe)
}
});
}


//Youtube API Section

    var YT_API_KEY = "AIzaSyCdW681Kz4w_rDae_Fv7q4LsCNcPZinsLM";

    //Spare Key:
    //AIzaSyCn4UetsSP0U1ys0I-Nse8icG5ybu9dnmc

    var video = '';


    $("#recipes").submit(function(event){
        event.preventDefault()
        console.log("form is submitted")
        var search = $(search).val()

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