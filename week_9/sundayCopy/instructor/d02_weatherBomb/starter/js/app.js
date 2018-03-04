$(function() {
    function getWeatherData(city) {
    const result = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
           q: city,
           APPID: '2e72f432ff2f76d63e0a6ca1d6cddc0e',
           units: 'imperial'
        },
        dataType: 'json',
        method: 'GET'
    });
        return result;
} 

function transformWeatherData(weatherData) {
    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const lat = weatherData.coord.lat;
    const long = weatherData.coord.lon;

    // const { name, main: { temp: temperature }, weather: [ { description } ], coord: { lat, lon: long} } = weatherData;

    return {
        cityName,
        temperature,
        description,
        lat,
        long
    }
}

function renderWeatherData(updatedWeatherData) {
    //LOAD THE DATA
    const { cityName, temperature, description, lat, long } = updatedWeatherData;
    const template = `
        <h1>${cityName}</h1>
        <h2>${temperature}</h2>
        <p>${description}</p>
        <span>LATITUDE: ${lat} || LONGTITUDE: ${long}</span>
    `;

    $('#results').append(template);
}

getWeatherData('New York')
    .then(transformWeatherData)
    .then(renderWeatherData)

getWeatherData('London')
    .then(transformWeatherData)
    .then(renderWeatherData)
;
})



//need to perform an Ajax call $.ajax()
//takes 2 arguments, 1 URL and 2 Object tag - the base URL you are trying to hit
//key value pair name=nam& 
//if not in URL use data object: to identify the items you are querying
//we are only use 1 combining the URL and Object
//Note: The url was pulled from https://openweathermap.org/current
//dataTypes: to specify Json is required
//Promise: perform action after an action is complete. Wait then do
//GET:get, POST:saves similar to web change, PUT/PATCH:update, Delete: similar to put&patch

//result.then is the callback complete action after the ajax function is ran. Run ajax THEN display results
//this is waiting for the data to be there, so you can manipulate the data

// ETL, Extract: from API getting data, Transform: data, Load the data to the page
// const {} = destruct the object, brackets on the left hand side of the equal sign indicates the object we
//