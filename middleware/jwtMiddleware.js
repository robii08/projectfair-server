const jwt = require("jsonwebtoken")


const jwtMiddleware = (req,res,next)=>{
    console.log('inside jwtMiddleware');
    const token = req.headers.authorization.split(" ")[1]
    console.log(token);
    try {
       const jwtResponse = jwt.verify(token,"supersecretkey") 
       req.payload = jwtResponse.userId
       next()
    } catch (error) {
        res.status(401).json(`Authorisation Failed ${error}`) 
    }
   
}

module.exports = jwtMiddleware