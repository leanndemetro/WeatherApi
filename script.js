//calls the function inIt
inIt();

//creates an emply variable called cityInput 
var cityInput = "";

//creates an empty variable called searchHistory
var searchHistory = [];



//creates a function that will run when the page loads
function inIt() {
    if (JSON.parse(localStorage.getItem("recentSearch")) !== null) {
        searchHistory = JSON.parse(localStorage.getItem("recentSearch"));
    }

    
    

//creates a function called store
function store() {
    //stores searcHistory array in local storage under the key name recentSearch
    localStorage.setItem("recentSearch", searchHistory);
    }
    

//calls this function 
    nt).ready(function () {
    en the #btn is clicked
        ).on("click", function (event) {
    //prevents default action
        event.preventDefault();
    //states that cityInput's value is equal to the text the user inputs in the element with the ID of citySearch
        cityInput = $("#citySearch").val().trim();


        //save currentWeather input to local storage
        $("#btn").on("click", function () {
            //console.log($("#citySearch").val());        
        });

         currentWeather();

    });

    for (let index = 0; index < searchHistory.length; index++) {
        var item = $("<div>")
        item.addClass("searchedItems");
        item.text(searchHistory[i])

        $(“#recSearches”).append(item);



    }


    //append previous searches to the left column div under the search bar
    // $("leftCol").html($("<div>).append(cityInput)
    


});
//creates a new function called currentWeather
function currentWeather() {
    //calls the openweather api and logs the object response to the console
    //sets the queryUrl variable to the Url of our API + the value of cityInput and lists my API key
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=1ef433144b9d88257be7c895c34018cc";

    //calls an ajax function
    $.ajax({
        //sets url that is requested to the value of the queryURL variable
        url: queryURL,
        method: "GET"
    })
        //creates a function and call the response
        .then(function (response) {
            //logs it in the console
            console.log(response);
            //pushes the response.name from the API data into the searchHistory array
            searchHistory.push(response.name);

            //calls the store function
            store();


        });
}
        //save searches to local storage


    // get current weather information for the cityInput variable
    //append it to the page in the right column top div



//    function forecast(city) {

//             $ajax({  //need to grab an hour of each day to display as daily forecast
//                 method="GET"
//                 url: "url up to q= + city + &&appid= key" + units=imperial

//             }).then(function(data) {

//                 console.log(data);

//             })

//             //copy function but make for uv index, and select an hour as well from data to show daily uv index
//             //look in data and find data image number to pull icons from it and post on page
    // }

    //get data for weather 

















// })

//link weather api to javascript 