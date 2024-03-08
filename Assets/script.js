var APIKey = "b9406a2f5841fe4ac3b66de6e00577c1";
var city;


function saveCity() {
    var userInput = document.getElementById("city").value;

    if (userInput !== "") {
        localStorage.setItem("userCity", userInput);
        city = localStorage.getItem("userCity");
    } else {
        alert("Please enter a valid city");
    }
};

// **********Function for displaying current weather with card hidden on page load**********
function displayWeather() {
    var text = document.getElementById("weatherBox");
    text.style.display = "flex";
    var text = document.getElementById("placeholder");
    text.style.display = "none";
}

// **********Function for displaying 5 day forecast with card hidden on page load**********
function displayForecast() {
    var text = document.getElementById("dayCards");
    text.style.display = "flex";
}

//**********Get weather for current day**********
function weatherAPI() {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    var cityHeader = document.getElementById("location");
    var cityTemperature = document.getElementById("temperature");
    var cityWind = document.getElementById("wind");
    var cityHumidity = document.getElementById("humidity");
    var cityDescription = document.getElementById("conditionsDescription");
    var weatherCodeGif = document.getElementById("weatherGif");
    var weatherBox = document.getElementById("weatherBox");
    var weatherPlaceholder = document.getElementById("placeholder");

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)


            var weatherDate = data.dt;
            var convertDate = new Date(weatherDate * 1000);
            var cleanDate = convertDate.toDateString();

            cityHeader.textContent = "Current Weather in " + data.name;

            var tempKelvin = data.main.temp;
            var tempFarenheit = (tempKelvin - 273.15) * 9 / 5 + 32;
            var cleanTempFarenheit = parseInt(tempFarenheit);
            cityTemperature.textContent = "Temperature: " + cleanTempFarenheit + "°F";
            
            var windMS = data.wind.speed;
            var windMPH = windMS * 2.237;
            var cleanWind = parseInt(windMPH);
            cityWind.textContent = "Wind: " + cleanWind + " MPH";
            
            cityHumidity.textContent = "Humidity: " + data.main.humidity + "%";

            var weatherDescriptionId = data.weather[0].description;

            cityDescription.textContent = "Conditions: " + weatherDescriptionId;
         

            // **********Swapping pre-populated weather symbol with fun gif**********
            var weatherID = data.weather[0].icon;
            if (weatherID == "01d") {
                weatherCodeGif.src = "./assets/weather_gifs/01d.gif";
            } else if (weatherID == "01n") {
                weatherCodeGif.src = "./assets/weather_gifs/01n.gif";
            } else if (weatherID == "02d") {
                weatherCodeGif.src = "./assets/weather_gifs/02d.gif";
            } else if (weatherID == "02n") {
                weatherCodeGif.src = "./assets/weather_gifs/02n.gif";
            } else if (weatherID == "03d") {
                weatherCodeGif.src = "./assets/weather_gifs/03d.gif";
            } else if (weatherID == "03n") {
                weatherCodeGif.src = "./assets/weather_gifs/03n.gif";
            } else if (weatherID == "04d") {
                weatherCodeGif.src = "./assets/weather_gifs/04d.gif";
            } else if (weatherID == "04n") {
                weatherCodeGif.src = "./assets/weather_gifs/04n.gif";
            } else if (weatherID == "09d") {
                weatherCodeGif.src = "./assets/weather_gifs/09d.gif";
            } else if (weatherID == "09n") {
                weatherCodeGif.src = "./assets/weather_gifs/09n.gif";
            } else if (weatherID == "10d") {
                weatherCodeGif.src = "./assets/weather_gifs/10d.gif";
            } else if (weatherID == "10n") {
                weatherCodeGif.src = "./assets/weather_gifs/10n.gif";
            } else if (weatherID == "11d") {
                weatherCodeGif.src = "./assets/weather_gifs/11d.gif";
            } else if (weatherID == "11n") {
                weatherCodeGif.src = "./assets/weather_gifs/11m.gif";
            } else if (weatherID == "13d") {
                weatherCodeGif.src = "./assets/weather_gifs/13d.gif";
            } else if (weatherID == "13n") {
                weatherCodeGif.src = "./assets/weather_gifs/13n.gif";
            } else if (weatherID == "50d") {
                weatherCodeGif.src = "./assets/weather_gifs/50d.gif";
            } else if (weatherID == "50n") {
                weatherCodeGif.src = "./assets/weather_gifs/50n.gif";
            }
        });
}

function forecastAPI() {
    var addtlQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    var day1Date = document.getElementById("day1Date");
    var day2Date = document.getElementById("day2Date");
    var day3Date = document.getElementById("day3Date");
    var day4Date = document.getElementById("day4Date");
    var day5Date = document.getElementById("day5Date");

    var day1Icon = document.getElementById("day1Pic");
    var day2Icon = document.getElementById("day2Pic");
    var day3Icon = document.getElementById("day3Pic");
    var day4Icon = document.getElementById("day4Pic");
    var day5Icon = document.getElementById("day5Pic");

    var day1Temp = document.getElementById("day1Temp");
    var day2Temp = document.getElementById("day2Temp");
    var day3Temp = document.getElementById("day3Temp");
    var day4Temp = document.getElementById("day4Temp");
    var day5Temp = document.getElementById("day5Temp");

    var day1Humid = document.getElementById("day1Humid");
    var day2Humid = document.getElementById("day2Humid");
    var day3Humid = document.getElementById("day3Humid");
    var day4Humid = document.getElementById("day4Humid");
    var day5Humid = document.getElementById("day5Humid");

    var day1Wind = document.getElementById("day1Wind");
    var day2Wind = document.getElementById("day2Wind");
    var day3Wind = document.getElementById("day3Wind");
    var day4Wind = document.getElementById("day4Wind");
    var day5Wind = document.getElementById("day5Wind");

    fetch(addtlQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

// **********Dates for the seperate forecast cards**********
            var day01Date = data.list[7].dt;
            var convertDay1Date = new Date(day01Date * 1000);
            var cleanDay1Date = convertDay1Date.toDateString();
            day1Date.textContent = cleanDay1Date;

            var day02Date = data.list[15].dt;
            var convertDay2Date = new Date(day02Date * 1000);
            var cleanDay2Date = convertDay2Date.toDateString();
            day2Date.textContent = cleanDay2Date;

            var day03Date = data.list[23].dt;
            var convertDay3Date = new Date(day03Date * 1000);
            var cleanDay3Date = convertDay3Date.toDateString();
            day3Date.textContent = cleanDay3Date;

            var day04Date = data.list[31].dt;
            var convertDay4Date = new Date(day04Date * 1000);
            var cleanDay4Date = convertDay4Date.toDateString();
            day4Date.textContent = cleanDay4Date;

            var day05Date = data.list[39].dt;
            var convertDay5Date = new Date(day05Date * 1000);
            var cleanDay5Date = convertDay5Date.toDateString();
            day5Date.textContent = cleanDay5Date;

// **********Swappting the API icon symbols for more entertaining gifs*********
            day1Id = data.list[7].weather[0].icon;
            if (day1Id == "01d") {
                day1Icon.src = "./assets/weather_gifs/01d.gif";
            } else if (day1Id == "01n") {
                day1Icon.src = "./assets/weather_gifs/01n.gif";
            } else if (day1Id == "02d") {
                day1Icon.src = "./assets/weather_gifs/02d.gif";
            } else if (day1Id == "02n") {
                day1Icon.src = "./assets/weather_gifs/02n.gif";
            } else if (day1Id == "03d") {
                day1Icon.src = "./assets/weather_gifs/03d.gif";
            } else if (day1Id == "03n") {
                day1Icon.src = "./assets/weather_gifs/03n.gif";
            } else if (day1Id == "04d") {
                day1Icon.src = "./assets/weather_gifs/04d.gif";
            } else if (day1Id == "04n") {
                day1Icon.src = "./assets/weather_gifs/04n.gif";
            } else if (day1Id == "09d") {
                day1Icon.src = "./assets/weather_gifs/09d.gif";
            } else if (day1Id == "09n") {
                day1Icon.src = "./assets/weather_gifs/09n.gif";
            } else if (day1Id == "10d") {
                day1Icon.src = "./assets/weather_gifs/10d.gif";
            } else if (day1Id == "10n") {
                day1Icon.src = "./assets/weather_gifs/10n.gif";
            } else if (day1Id == "11d") {
                day1Icon.src = "./assets/weather_gifs/11d.gif";
            } else if (day1Id == "11n") {
                day1Icon.src = "./assets/weather_gifs/11n.gif";
            } else if (day1Id == "13d") {
                day1Icon.src = "./assets/weather_gifs/13d.gif";
            } else if (day1Id == "13n") {
                day1Icon.src = "./assets/weather_gifs/13n.gif";
            } else if (day1Id == "50d") {
                day1Icon.src = "./assets/weather_gifs/50d.gif";
            } else if (day1Id == "50n") {
                day1Icon.src = "./assets/weather_gifs/50n.gif";
            }

            day2Id = data.list[15].weather[0].icon;
            if (day2Id == "01d") {
                day2Icon.src = "./assets/weather_gifs/01d.gif";
            } else if (day2Id == "01n") {
                day2Icon.src = "./assets/weather_gifs/01n.gif";
            } else if (day2Id == "02d") {
                day2Icon.src = "./assets/weather_gifs/02d.gif";
            } else if (day2Id == "02n") {
                day2Icon.src = "./assets/weather_gifs/02n.gif";
            } else if (day2Id == "03d") {
                day2Icon.src = "./assets/weather_gifs/03d.gif";
            } else if (day2Id == "03n") {
                day2Icon.src = "./assets/weather_gifs/03n.gif";
            } else if (day2Id == "04d") {
                day2Icon.src = "./assets/weather_gifs/04d.gif";
            } else if (day2Id == "04n") {
                day2Icon.src = "./assets/weather_gifs/04n.gif";
            } else if (day2Id == "09d") {
                day2Icon.src = "./assets/weather_gifs/09d.gif";
            } else if (day2Id == "09n") {
                day2Icon.src = "./assets/weather_gifs/09n.gif";
            } else if (day2Id == "10d") {
                day2Icon.src = "./assets/weather_gifs/10d.gif";
            } else if (day2Id == "10n") {
                day2Icon.src = "./assets/weather_gifs/10n.gif";
            } else if (day2Id == "11d") {
                day2Icon.src = "./assets/weather_gifs/11d.gif";
            } else if (day2Id == "11n") {
                day2Icon.src = "./assets/weather_gifs/11n.gif";
            } else if (day2Id == "13d") {
                day2Icon.src = "./assets/weather_gifs/13d.gif";
            } else if (day2Id == "13n") {
                day2Icon.src = "./assets/weather_gifs/13n.gif";
            } else if (day2Id == "50d") {
                day2Icon.src = "./assets/weather_gifs/50d.gif";
            } else if (day2Id == "50n") {
                day2Icon.src = "./assets/weather_gifs/50n.gif";
            }

            day3Id = data.list[23].weather[0].icon;
            if (day3Id == "01d") {
                day3Icon.src = "./assets/weather_gifs/01d.gif";
            } else if (day3Id == "01n") {
                day3Icon.src = "./assets/weather_gifs/01n.gif";
            } else if (day3Id == "02d") {
                day3Icon.src = "./assets/weather_gifs/02d.gif";
            } else if (day3Id == "02n") {
                day3Icon.src = "./assets/weather_gifs/02n.gif";
            } else if (day3Id == "03d") {
                day3Icon.src = "./assets/weather_gifs/03d.gif";
            } else if (day3Id == "03n") {
                day3Icon.src = "./assets/weather_gifs/03n.gif";
            } else if (day3Id == "04d") {
                day3Icon.src = "./assets/weather_gifs/04d.gif";
            } else if (day3Id == "04n") {
                day3Icon.src = "./assets/weather_gifs/04n.gif";
            } else if (day3Id == "09d") {
                day3Icon.src = "./assets/weather_gifs/09d.gif";
            } else if (day3Id == "09n") {
                day3Icon.src = "./assets/weather_gifs/09n.gif";
            } else if (day3Id == "10d") {
                day3Icon.src = "./assets/weather_gifs/10d.gif";
            } else if (day3Id == "10n") {
                day3Icon.src = "./assets/weather_gifs/10n.gif";
            } else if (day3Id == "11d") {
                day3Icon.src = "./assets/weather_gifs/11d.gif";
            } else if (day3Id == "11n") {
                day3Icon.src = "./assets/weather_gifs/11n.gif";
            } else if (day3Id == "13d") {
                day3Icon.src = "./assets/weather_gifs/13d.gif";
            } else if (day3Id == "13n") {
                day3Icon.src = "./assets/weather_gifs/13n.gif";
            } else if (day3Id == "50d") {
                day3Icon.src = "./assets/weather_gifs/50d.gif";
            } else if (day3Id == "50n") {
                day3Icon.src = "./assets/weather_gifs/50n.gif";
            }

            day4Id = data.list[31].weather[0].icon;
            if (day4Id == "01d") {
                day4Icon.src = "./assets/weather_gifs/01d.gif";
            } else if (day4Id == "01n") {
                day4Icon.src = "./assets/weather_gifs/01n.gif";
            } else if (day4Id == "02d") {
                day4Icon.src = "./assets/weather_gifs/02d.gif";
            } else if (day4Id == "02n") {
                day4Icon.src = "./assets/weather_gifs/02n.gif";
            } else if (day4Id == "03d") {
                day4Icon.src = "./assets/weather_gifs/03d.gif";
            } else if (day4Id == "03n") {
                day4Icon.src = "./assets/weather_gifs/03n.gif";
            } else if (day4Id == "04d") {
                day4Icon.src = "./assets/weather_gifs/04d.gif";
            } else if (day4Id == "04n") {
                day4Icon.src = "./assets/weather_gifs/04n.gif";
            } else if (day4Id == "09d") {
                day4Icon.src = "./assets/weather_gifs/09d.gif";
            } else if (day4Id == "09n") {
                day4Icon.src = "./assets/weather_gifs/09n.gif";
            } else if (day4Id == "10d") {
                day4Icon.src = "./assets/weather_gifs/10d.gif";
            } else if (day4Id == "10n") {
                day4Icon.src = "./assets/weather_gifs/10n.gif";
            } else if (day4Id == "11d") {
                day4Icon.src = "./assets/weather_gifs/11d.gif";
            } else if (day4Id == "11n") {
                day4Icon.src = "./assets/weather_gifs/11n.gif";
            } else if (day4Id == "13d") {
                day4Icon.src = "./assets/weather_gifs/13d.gif";
            } else if (day4Id == "13n") {
                day4Icon.src = "./assets/weather_gifs/13n.gif";
            } else if (day4Id == "50d") {
                day4Icon.src = "./assets/weather_gifs/50d.gif";
            } else if (day4Id == "50n") {
                day4Icon.src = "./assets/weather_gifs/50n.gif";
            }

            day5Id = data.list[39].weather[0].icon;
            if (day5Id == "01d") {
                day5Icon.src = "./assets/weather_gifs/01d.gif";
            } else if (day5Id == "01n") {
                day5Icon.src = "./assets/weather_gifs/01n.gif";
            } else if (day5Id == "02d") {
                day5Icon.src = "./assets/weather_gifs/02d.gif";
            } else if (day5Id == "02n") {
                day5Icon.src = "./assets/weather_gifs/02n.gif";
            } else if (day5Id == "03d") {
                day5Icon.src = "./assets/weather_gifs/03d.gif";
            } else if (day5Id == "03n") {
                day5Icon.src = "./assets/weather_gifs/03n.gif";
            } else if (day5Id == "04d") {
                day5Icon.src = "./assets/weather_gifs/04d.gif";
            } else if (day5Id == "04n") {
                day5Icon.src = "./assets/weather_gifs/04n.gif";
            } else if (day5Id == "09d") {
                day5Icon.src = "./assets/weather_gifs/09d.gif";
            } else if (day5Id == "09n") {
                day5Icon.src = "./assets/weather_gifs/09n.gif";
            } else if (day5Id == "10d") {
                day5Icon.src = "./assets/weather_gifs/10d.gif";
            } else if (day5Id == "10n") {
                day5Icon.src = "./assets/weather_gifs/10n.gif";
            } else if (day5Id == "11d") {
                day5Icon.src = "./assets/weather_gifs/11d.gif";
            } else if (day5Id == "11n") {
                day5Icon.src = "./assets/weather_gifs/11n.gif";
            } else if (day5Id == "13d") {
                day5Icon.src = "./assets/weather_gifs/13d.gif";
            } else if (day5Id == "13n") {
                day5Icon.src = "./assets/weather_gifs/13n.gif";
            } else if (day5Id == "50d") {
                day5Icon.src = "./assets/weather_gifs/50d.gif";
            } else if (day5Id == "50n") {
                day5Icon.src = "./assets/weather_gifs/50n.gif";
            }

// **********Coverting temps from API to °F and communicating to the various cards**********
            var day1TempKelvin = data.list[7].main.temp;
            var day1TempFarenheit = (day1TempKelvin - 273.15) * 9 / 5 + 32;
            var cleanDay1TempFarenheit = parseInt(day1TempFarenheit);
            day1Temp.textContent = "Temp: " + cleanDay1TempFarenheit + "°F";

            var day2TempKelvin = data.list[15].main.temp;
            var day2TempFarenheit = (day2TempKelvin - 273.15) * 9 / 5 + 32;
            var cleanDay2TempFarenheit = parseInt(day2TempFarenheit);
            day2Temp.textContent = "Temp: " + cleanDay2TempFarenheit + "°F";

            var day3TempKelvin = data.list[23].main.temp;
            var day3TempFarenheit = (day3TempKelvin - 273.15) * 9 / 5 + 32;
            var cleanDay3TempFarenheit = parseInt(day3TempFarenheit);
            day3Temp.textContent = "Temp: " + cleanDay3TempFarenheit + "°F";

            var day4TempKelvin = data.list[31].main.temp;
            var day4TempFarenheit = (day4TempKelvin - 273.15) * 9 / 5 + 32;
            var cleanDay4TempFarenheit = parseInt(day4TempFarenheit);
            day4Temp.textContent = "Temp: " + cleanDay4TempFarenheit + "°F";

            var day5TempKelvin = data.list[39].main.temp;
            var day5TempFarenheit = (day5TempKelvin - 273.15) * 9 / 5 + 32;
            var cleanDay5TempFarenheit = parseInt(day5TempFarenheit);
            day5Temp.textContent = "Temp: " + cleanDay5TempFarenheit + "°F";

// **********Humidity portion for the forecast cards**********
            day1Humid.textContent = "Humidity: " + data.list[7].main.humidity + "%";
            day2Humid.textContent = "Humidity: " + data.list[15].main.humidity + "%";
            day3Humid.textContent = "Humidity: " + data.list[23].main.humidity + "%";
            day4Humid.textContent = "Humidity: " + data.list[31].main.humidity + "%";
            day5Humid.textContent = "Humidity: " + data.list[39].main.humidity + "%";

// **********Wind for forecast cards*********
            var day1WindMS = data.list[7].wind.speed;
            var day1WindMPH = day1WindMS * 2.237;
            var day1CleanWind = parseInt(day1WindMPH);
            day1Wind.textContent = "Wind: " + day1CleanWind + " MPH";

            var day2WindMS = data.list[15].wind.speed;
            var day2WindMPH = day2WindMS * 2.237;
            var day2CleanWind = parseInt(day2WindMPH);
            day2Wind.textContent = "Wind: " + day2CleanWind + " MPH";

            var day3WindMS = data.list[23].wind.speed;
            var day3WindMPH = day3WindMS * 2.237;
            var day3CleanWind = parseInt(day3WindMPH);
            day3Wind.textContent = "Wind: " + day3CleanWind + " MPH";

            var day4WindMS = data.list[31].wind.speed;
            var day4WindMPH = day4WindMS * 2.237;
            var day4CleanWind = parseInt(day4WindMPH);
            day4Wind.textContent = "Wind: " + day4CleanWind + " MPH";

            var day5WindMS = data.list[39].wind.speed;
            var day5WindMPH = day5WindMS * 2.237;
            var day5CleanWind = parseInt(day5WindMPH);
            day5Wind.textContent = "Wind: " + day5CleanWind + " MPH";
        });



}
