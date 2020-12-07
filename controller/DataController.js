const datas = []

const postDataReader = function (request, response){

    let body = request.body

    console.log("body " + request)

    response.setHeader("Content-Type","application/json")

    //Validation
    if(body == null || body.sensorId == null || body.data == null){
        // error
        response.statusCode = 400
        let object = {
            messsage : "error"
        }
        response.end(JSON.stringify(object))

    }
    else{
        datas.push(body)
        //Success
        response.statusCode = 201
        let object = {
            messsage : "success created"
        }
        response.end(JSON.stringify(object))
    }
}

module.exports = {
    postDataReader
}