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
            weatherImage.attr("data-still", results[i].images.fixed_height_still.url);
            weatherImage.attr("data-animate", results[i].images.fixed_height.url);
            weatherImage.attr("dataAnimated", false);
            weatherDiv.append(p);
            weatherDiv.append(weatherImage);
            $("#gifs-appear-here").prepend(weatherDiv);
            console.log(weatherImage);
        }
        $("img").on("click", function() {
            console.log(100);
            console.log($(this).attr("dataAnimated"));
            var state = $(this).attr("dataAnimated");
            console.log(state)
            if (state==="false") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("dataAnimated", true);
        
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("dataAnimated", false);
            }
        });
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

    




