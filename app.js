const geocode = require('./utils/geocode')
const request = require('request')
const getTemp = require('./utils/getTemp')
// get data from user for location
// var cordinates = undefined
// will use mapbox api to get location cordinates
// const mapurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3VzaGFsMTIzIiwiYSI6ImNqcDJvbnN3OTA5ZWUzcW5ybG1pdmZleGcifQ.wWgAdBuzneB_3IwsaUqbag"
// request({url:mapurl, json: true},(error,response)=>{

//     if(error){
//         console.log("Encountered unexpected errors ")
//     }
//     else{
//     const cordinates = response.body.features[0].center
//     console.log(cordinates)
//     const URL = "http://api.weatherstack.com/current?access_key=caf0db1c1bf0d3838951ab8a587bedcf&ery="+ cordinates[1] + ","+ cordinates[0]
//     // const testurl = "http://api.weatherstack.com/current?access_key=caf0db1c1bf0d3838951ab8a587bedcf&query=40.7831,-73.9712"
//     }})

// will use this to get temperature
// request({url:URL, json:true},(error,response)=>{
//     if(error){
//         console.log("Bad")
//     }
//     else if(response.body.error){
//     console.log(response.body.error.info)
//     }
//     else{
//     console.log(response.body)
//     }
// })


// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-112'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })



geocode('Boston', (error, data) => {

    if(error){
        console.log(error)
    }
    else{
        // console.log(data)
        getTemp(data.latitude,data.longitude, (error,info)=>{
            if(error)
            console.log(error)
            else
            console.log("Current temperature of "+data.location +" is "+ info + " *F")
        })
    }
})