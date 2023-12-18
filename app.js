const request = require('request')


// get data from user for location


// var cordinates = undefined
// will use mapbox api to get location cordinates
const mapurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3VzaGFsMTIzIiwiYSI6ImNqcDJvbnN3OTA5ZWUzcW5ybG1pdmZleGcifQ.wWgAdBuzneB_3IwsaUqbag"
request({url:mapurl, json: true},(error,response)=>{
    const cordinates = response.body.features[0].center
    // console.log(cordinates)
    const URL = "http://api.weatherstack.com/current?access_key=caf0db1c1bf0d3838951ab8a587bedcf&query="+ cordinates[0] + ","+ cordinates[1]

// will use this to get temperature
request({url:URL},(error,response)=>{
    console.log(response.body)
})
})

