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