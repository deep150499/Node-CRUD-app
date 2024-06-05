const crypto = require('crypto');
const requestBodyParser = require('../util/body-parser');


module.exports = async (req,res) => {
    try{
        let body = await requestBodyParser(req)
        console.log("Request Body : ",  body)
    }
    catch(err){

    }
}