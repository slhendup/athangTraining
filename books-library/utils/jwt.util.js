const jwt = require("jsonwebtoken");

const JWT_SECRET = "Very Secret";

const createJWTTOKEN =(data) =>{
    return jwt.sign(data,JWT_SECRET);
};

const verifyJWTToken= (token) =>{
    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        return decoded;
    } catch (err) {
        console.log(err)
        return{ error: true, message: err.message};
    }
};

module.exports= {
    createJWTTOKEN, verifyJWTToken
};