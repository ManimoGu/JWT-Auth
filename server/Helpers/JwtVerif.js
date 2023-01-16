


const jwt = require("jsonwebtoken")


exports.ACCESS = (req, res, next) =>{

    const header_token =  req.headers['authorization']

    const token = header_token && header_token.split(' ')[1]
    
    if(token === null) res.sendStatus(403)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, result) =>{
     
        if (err) console.log(err)
        console.log(result)
        next()
    })

}




