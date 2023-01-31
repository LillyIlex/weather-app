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
            console.log(queryURL);
            console.log(response)
            var cityName = response.city.name;
            var date = response.list[0].dt_txt;
            var temp = response.list[0].main.temp;
            var wind = response.list[0].wind.speed;
            var humidity = response.list[0].main.humidity;
            var icon = response.list[0].weather[0].icon;
            // console.log(icon + date + wind + temp + humidity + cityName);
        })


    })

    //append previous searches into buttons;
   /* $("#search-button").on("click", function (event) {
        event.preventDefault();
        localStorage.setItem("city", cityResults);
        //for loop?
        $(function () {

            $("#1").val(localStorage.getItem("city"));
            $("#2.innerHTML").val(localStorage.getItem("city"));
            $("#3.innerHTML").val(localStorage.getItem("city"));
            $("#4.innerHTML").val(localStorage.getItem("city"));
            $("#5.innerHTML").val(localStorage.getItem("city"));

        });
    }) */

})


//var cityName = $(".card-title")
// append text input with innerHTML

//append previous searches into buttons;
