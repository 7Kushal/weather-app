const request = require('request')
// const geocode = require('./geocode')


const getTemp = (latitute,longitute, callback)=>{
    const URL = "http://api.weatherstack.com/current?access_key=caf0db1c1bf0d3838951ab8a587bedcf&query="+ latitute + ","+ longitute + '&units=f'
    // console.log(URL)
    request({url:URL, json:true},(error,response)=>{
        if(error){
            callback("Something is wrong at client end ", undefined)
        }
        else if(response.body.error){
            callback(response.body.error.info, undefined)
        }
        else{
            callback(undefined,response.body.current.temperature)
        }
    })
}

module.exports = getTemp