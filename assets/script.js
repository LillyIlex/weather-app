//added date and time from moment.js
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, Do MMMM YYYY, h:mm a'));
};
$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


//add event listener for search button
var searchBtn = $("#search-button")
var city = $("#search-input")
var searchResults
var cityResults


// CLEAR STORAGE ON PAGE LOAD
localStorage.clear() 


searchBtn.on("click", function (event) {
    event.preventDefault()
    //value of text inputted saved as new var
    var cityResults = city.val()
    console.log(cityResults)
    localStorage.setItem("search1", cityResults);
    $("#button-1").append(localStorage.getItem("search1"))
    city.val("")

 

    var limit = 5
    var apiKey = "bea3b67283dd3660e8a767a5a906068a"
    var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=%7Bcity=" + cityResults + "&limit=" + limit + "&appid=" + apiKey
    console.log(geoURL);

    //ajax to fetch URL from api.
    $.ajax({
        url: geoURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var lat = response[0].lat.toFixed(2) //changes to str from int
        var lon = response[0].lon.toFixed(2)

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
    
            var cityName = response.city.name;
            var date = response.list[0].dt_txt;
            var temp = response.list[0].main.temp;
            var wind = response.list[0].wind.speed;
            var humidity = response.list[0].main.humidity;
            var icon = response.list[0].weather[0].description;
          
            //today's weather card input 
            //not working
            $("#city").append(cityName);
            $("#today-date").append(date);
            $("#today-temp").append((temp - 273.15).toFixed(1));
            $("#today-wind").append(wind);
            $("#today-humid").append(humidity);
            $("#today-icon").append(icon); 
            
            cityTextBox.val()

           /* var date4 = response.list[4].dt_txt;
            var temp4 = response.list[4].main.temp;
            var wind4 = response.list[4].wind.speed;
            var humidity4 = response.list[4].main.humidity;
            var icon4 = response.list[4].weather[4].description;

            $("#day4-date").append(JSON.stringify(date4));
            $("#day4-temp").append(JSON.stringify(temp4 - 273.15).toFixed(1));
            $("#day4-wind").append(JSON.stringify(wind4));
            $("#day4-humid").append(JSON.stringify(humidity4));
            $("#day4-icon").append(JSON.stringify(icon4)); */
        })
   
      
    }) 
         //SEARCH 2
        $("#search-button").on("click", function (event) {
            event.preventDefault();
            var cityResults2 = $("#search-input").val()
          localStorage.setItem("search2", cityResults2);
            city.val("")
            $("#button-2").append(localStorage.getItem("search2"))

           });

           //SEARCH 3
           $("#search-button").on("click", function (event) {
            event.preventDefault();
            var cityResults3 = $("#search-input").val()
          localStorage.setItem("search3", cityResults3);
            city.val("")
            $("#button-3").append(localStorage.getItem("search3"))

            $("#city").empty();
            $("#today-date").empty();
            $("#today-temp").empty();
            $("#today-wind").empty();
            $("#today-humid").empty();
            $("#today-icon").empty();
           })
      

    /*
    $(function () {
        //var searchResults = localStorage.getItem("search1")
        $("#button-1").append(localStorage.getItem("search1"))
        $("#button-2").append(localStorage.getItem("search2"))
        $("#button-3").append(localStorage.getItem("search3"))
        $("#button-4").append(localStorage.getItem("search4"))
        $("#button-5").append(localStorage.getItem("search5"))

    }); */
    $("#clear-button").on("click", function () {
        localStorage.clear()
        $("#button-1.innerHTML").val("")
        $("#button-2").val("")
        $("#button-3").val("")
        $("##button-4").val("")
        $("#button-5").val("")
    });
})




    //append previous searches into buttons;



    //SECOND SEARCH
    /*
searchBtn.on("click", function (event) {
    event.preventDefault()
    $(".card-text").val("")
    //value of text inputted saved as new var
    var cityResults = city.val()
    console.log(cityResults)
    localStorage.setItem("search2", cityResults);
 */
