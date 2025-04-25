import readline from "readline/promises"
 
const apiKey = "cbe966be3905c378a763968f2ee44578";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const getWeather = async (city) => {
    const fullUrl = apiUrl+city
    try {
        const response = await fetch(fullUrl)
        if(!response.ok){
            throw new Error("Invalid city name, Try Again")
        }
        const apiData = await response.json()

        console.log(`\n..............Weather Information in ${apiData.name}............\n`);
        console.log(`Temperature : ${apiData.main.temp}`);
        console.log(`Description : ${apiData.weather[0].description}`);
        console.log(`Humidity : ${apiData.main.humidity}`);
        console.log(`Wind Speed : ${apiData.wind.speed}\n`);
        rl.close()
    } catch (error) {
        console.log(error);
        rl.close()
    }
}

const city = await rl.question("Enter the city name : ")
getWeather(city)
