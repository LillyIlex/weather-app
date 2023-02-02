//added date and time from moment.js
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
};
$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


//add event listener for search button
var searchBtn = $("#search-button")
var city = $("#search-input:text")
var search


searchBtn.on("click", function (event) {
    event.preventDefault()
    //value of text inputted saved as new var
    var cityResults = city.val()
    console.log(cityResults)

    var limit = 3
    var apiKey = "bea3b67283dd3660e8a767a5a906068a"
    var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=%7Bcity=" + cityResults + "&limit=" + limit + "&appid=" + apiKey
    console.log(geoURL);

    //ajax to fetch URL from api.
    $.ajax({
        url: geoURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var lat = response[0].lat.toFixed(2)
        var lon = response[0].lon.toFixed(2)

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //console.log(queryURL);
            //console.log(response)
            var cityName = response.city.name;
            var date = response.list[0].dt_txt;
            var temp = response.list[0].main.temp;
            var wind = response.list[0].wind.speed;
            var humidity = response.list[0].main.humidity;
            var icon = response.list[0].weather[0].description;
          
            //today's weather card input 
            $("#city").append(cityName);
            $("#today-date").append(date);
            $("#today-temp").append((temp - 273.15).toFixed(1));
            $("#today-wind").append(wind);
            $("#today-humid").append(humidity);
            $("#today-icon").append(icon);

            var date4 = response.list[4].dt_txt;
            var temp4 = response.list[4].main.temp;
            var wind4 = response.list[4].wind.speed;
            var humidity4 = response.list[4].main.humidity;
            var icon4 = response.list[4].weather[4].description;

            $("#day4-date").append(JSON.stringify(date4));
            $("#day4-temp").append(JSON.stringify(temp4 - 273.15).toFixed(1));
            $("#day4-wind").append(JSON.stringify(wind4));
            $("#day4-humid").append(JSON.stringify(humidity4));
            $("#day4-icon").append(JSON.stringify(icon4));
        })
    })
})
      
       // clear input for new search
           //click event on search button to clear previous search results.



    //append previous searches into buttons;

 $("#search-button").on("click", function (event) {
     event.preventDefault();
     cityResults = $("#search-input").val()

     //for ( i = 0; i < cityResults.length; i++) {
     //localStorage.setItem("city", cityResults[i]);
     //for loop?
     $(function () {
        $("#button-1").append(JSON.stringify(cityResults))
        $("#button-2").append(JSON.stringify())
        $("#button-3").append(JSON.stringify())
        $("#button-4").append(JSON.stringify())
        $("#button-5").append(JSON.stringify())
     });
    })
