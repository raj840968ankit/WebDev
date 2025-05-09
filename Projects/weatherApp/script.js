/*Weather app api–---------
Open weather map site -> sign in -> get api key(api key section) 
    -> go to api section and copy url get weather by city name by scrolling downside of the web page*/
//by default units is standard so change into metric for celsius by adding '&units=metric' in url

const apiKey = "cbe966be3905c378a763968f2ee44578";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector('.city')
const temperature = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const searchBox = document.querySelector('.search input')
const searchBtn =  document.querySelector('.search button')
const weatherIcon =  document.querySelector('.weather-icon')

//sounds object
const sounds = {
    rain:    new Audio('sound/rain.mp3'),
    cloud:  new Audio('sound/cloud.mp3'),
    drizzle: new Audio('sound/drizzle.mp3'),
};

//for stopping sound once it is played
function stopAllSounds() {
    Object.values(sounds).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
}

function checkWeather(cityName){

    fetch(apiUrl + `${cityName}&appid=${apiKey}`).then(function(response){
        if(response.status === 404){
            document.querySelector('.weather').style.display = 'none'
            document.querySelector('.error').style.display = 'block'
            stopAllSounds()
            return
        }
        return response.json()
    }).then(function(objectData){
        //not we get the data in objectData variable
        //now we will update the parameters like place, temperature, humidity and wind
        stopAllSounds()
        
        city.innerHTML = objectData.name
        temperature.innerHTML = `${Math.floor(objectData.main.temp)}°c`
        humidity.innerHTML = `${objectData.main.humidity}%`
        wind.innerHTML = `${objectData.wind.speed} km/h`

        if(objectData.weather[0].main === 'Clouds'){
            weatherIcon.src = "imagesWeather/clouds.png"
            sounds.cloud.play()
        }
        else if(objectData.weather[0].main === 'Rain'){
            weatherIcon.src = "imagesWeather/rain.png"
            sounds.rain.play()
        }
        else if(objectData.weather[0].main === 'Clear'){
            weatherIcon.src = "imagesWeather/clear.png"
        }
        else if(objectData.weather[0].main === 'Drizzle'){
            weatherIcon.src = "imagesWeather/drizzle.png"
            sounds.drizzle.play()
        }
        else if(objectData.weather[0].main === 'Mist'){
            weatherIcon.src = "imagesWeather/mist.png"
        }

        //the weather div will only be displayed if user search some valid city
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    }).catch(function(error){
        console.log(error);
    })
}

searchBtn.addEventListener('click', function(){
    checkWeather(searchBox.value)
})