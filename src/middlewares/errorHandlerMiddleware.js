export default function errorHandlerMiddleware(error, req, res, next){
    if(error.type === "emptyField"){
        return res.sendStatus()
    }
    if(error.type === "emailAlreadInUse"){
        return res.sendStatus()
    }
    if(error.type === "wrongCredentials"){
        return res.sendStatus()
    }
    if(error.type === "naoAutorizado"){
        return res.sendStatus(401)
    }
    if(error.type === "wrongTransaction"){
        return res.sendStatus(422)
    }
};


