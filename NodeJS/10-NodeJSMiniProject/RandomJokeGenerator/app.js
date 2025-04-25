

import https from 'https'
import chalk from "chalk"

const generateJoke = () => {
    const apiUrl = "https://official-joke-api.appspot.com/random_joke"
    https.get(apiUrl, (response) => {
        let data = ""
        response.on("data", (chunk) => {   //we will get data chunk by chunk
            data += chunk
        });

        response.on("end", () => {
            const joke = JSON.parse(data)
            console.log(`Here is a ${joke.type} Joke`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        });

        response.on("error", (error) => {
            console.log(error.message)
        });
    })
}
generateJoke()