
$("button").on("click", function(e) {
    console.log("100");

var topics = ["hail", "rain", "lightening", "clouds"];
function weatherGifs(){
    console.log("weather");


    var weather = $(this).attr("data-weather");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      weather + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;
            console.log(response);
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var weatherImage = $("<img>");
          weatherImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(weatherImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
    
    function makeButtons(){
        $("#buttons-view").empty();
        for (var i = 0; i < movies.length; i++){
            var weatherButton = $("<button>");
            weatherButton.addClass("weather");
            weatherButton.attr("data-name", movies[i]);
            weatherButton.text(movies[i]);
            $("buttons-view").append(weatherButton);
        }
    }
    $("#add-weather").on("click", function(event){
        event.preventDefault();
        var weather = $("#weather-input").val().trim();
        weather.push(weather);
        makeButtons();
    });
    $(document).on("click", ".weather", displayWeatherInfo);
}
}) ;
// }; 

