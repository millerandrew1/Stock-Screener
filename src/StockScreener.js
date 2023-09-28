const https = require('https')

const options = {
    hostname: 'financialmodelingprep.com',
    port: 443,
    path: 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=a5df1e34a66d2eeb25448eb9a1f2655f',
    method: 'GET'
}

const req = https.request(options, (res) => {
    res.on('data', (d) => {
        process.stdout.write(d)

    })
})

req.on('error', (error) => {
    console.error(error)
})

req.end()

