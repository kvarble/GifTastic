var weatherArray = ["clouds", "snow", "ice", "rain"];

function showWeather(){

    var weather = $(this).attr("data-weather");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    weather + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(queryURL);
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++){
            var weatherDiv = $("<div class='weather'>");
            var p = $("<p>").text("Rating: " + results[i].rating);

            var weatherImage = $("<img>");
            weatherImage.attr("src", results[i].images.fixed_height_still.url);
            weatherDiv.append(p);
            weatherDiv.append(weatherImage);
            $("#gifs-appear-here").prepend(weatherDiv);
        }
        
        });
    }
        function makeButtons(){
            $("#buttons-view").empty();
            for (var i = 0; i < weatherArray.length; i++){
               var newButton = $("<button>");
               newButton.addClass("weather-btn")
               newButton.attr("data-weather", weatherArray[i])
               newButton.text(weatherArray[i]);
               $("#buttons-view").append(newButton);
            }
        }
        $("#add-weather").on("click", function(event){
            event.preventDefault();

            var newWeather = $("#weather-input").val().trim();
        weatherArray.push(newWeather);
        makeButtons()   
    });
    $(document).on("click", ".weather-btn", showWeather);

    makeButtons();




