var ingredientList = []
$(document).ready(function () {

//Attempt at populating ingredients

    var ingredientFormEl = $('#ingredient-form');
    var ingredientListEl = $('#ingredient-list');

    function handleFormSubmit(event) {
        event.preventDefault();

        var ingredientItem = $('input[name="ingredient-input"]').val();
        

        if (!ingredientItem) {
        console.log("No text entered")
        return;
        }

        var ingredientListItemEl = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
        );
    
        ingredientListItemEl.text(ingredientItem);

        // add delete button to remove ingredient list item
        ingredientListItemEl.append(
            '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
        );

        // print to the page
        ingredientListEl.append(ingredientListItemEl)
        
        //add the item to array "ingredientList"
        ingredientList.push(ingredientItem)

        
        // for (var i = 0; i < val2; i++) {
        //     ingredientList[i] = document.getElementById(i + ingredientItem).value;
        // } 

        // clear the form input element
        $('input[name="ingredients-input"]').val('');
    }

    function handleRemoveItem(event) {
    delBtnClicked = $(event.target);
    // get the parent `<li>` element from the button we pressed and remove it
    delBtnClicked.parent('li').remove();
    
    }




    // use event delegation on the `ingredientListEl` to listen for click on any element with a class of `delete-item-btn`
    ingredientListEl.on('click', '.delete-item-btn', handleRemoveItem);
    ingredientFormEl.on('submit', handleFormSubmit);


    //Spoonacular API Section
    var fetchButton = document.getElementById("fetch-button");

    fetchButton.addEventListener("click", getIngredientList);

    function getIngredientList(event){

        event.preventDefault();

        $("#recipe-list").empty();

        var searchInputText = ingredientList.join(",").trim();

        console.log(searchInputText);

        var Spoon_API_Key = "c368ef238cd94dd8a3b620606903fcdb";

        //Spare Spoon Keys:
        //a866358606864f90bd2edd6a86febdab
        //a6bc0cdd81484675bded0d13edae9d8
        //caf4ab2a47054816a81bf757a283f48a
        //0982c029a4d04bb5b43ac973cac0a1bd
        
        fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=` + Spoon_API_Key + `&query=${searchInputText}`
        )

        .then(function (response) {
        return response.json();
        })

        .then(function (data) {

            console.log(data);

            for (var i = 0; i < 5; i++) {
                var myRecipe = document.createElement("h3");

                var myDish = document.createElement("img");

                myRecipe.textContent = data.results[i].title;

                myDish.src = data.results[i].image;

                $("#recipe-list").append(myRecipe);

                $("#recipe-list").append(myDish);

                console.log(myRecipe);
            }
        });


        //Youtube API Section
        var YT_API_KEY = "AIzaSyCdW681Kz4w_rDae_Fv7q4LsCNcPZinsLM";

        //Spare YT Key:
        //AIzaSyCdW681Kz4w_rDae_Fv7q4LsCNcPZinsLM

        var video = "";

        function videoSearch(key, search, maxResults) {
            $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults" + maxResults + "&q=" + search,

            function (data) {console.log(data);
                data.items.forEach((item) => {
                    video = ` <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> `;

                    $("#videos").append(video);
                });
            }
            );
        };

        $("#recipe-list").on("click", "h3", function (event) {
            
            event.preventDefault();

            $("#videos").empty();

            console.log("form is submitted");

            var search = $(this).text() + "recipe";
            var maxResults = 4;
                //Note^ added `+ "recipe"` here--can remove if broken

            videoSearch(YT_API_KEY, search, 5);
        })
    }
});
