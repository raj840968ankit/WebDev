import https from 'https'
import readline from 'readline'  // deals with CLI
import chalk from 'chalk'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const apiKey = 'c85a47593ec6132c88426f0b'
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`  //Exchange Rate API website

const covertCurrency = () => {
    https.get(apiUrl, (response) => {
        let data = ""
        response.on('data', (chunk) => {
            data += chunk
        })

        response.on('end', () => {
            const apiData = JSON.parse(data)
            rl.question("Enter the amount in INR : ", (amount) => {
                rl.question("Enter the target currency (e,g, USD, EUR, NPR) : ", (currencyType) => {
                    const currency = currencyType.toUpperCase()
                    const convertedCurrency = (Number(amount) * (apiData.conversion_rates[currency])).toFixed(2)
                    console.log(chalk.black.bgRed.bold(`${amount} INR is approximately ${convertedCurrency} ${currency}`));
                    rl.close()
                })
            })
        })
        response.on('error', (error) => {
            console.log(error.message);
        })
    })
}
covertCurrency()