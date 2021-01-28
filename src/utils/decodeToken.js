require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.decodeToken  = async(req,res) => {
    const token = req.headers.authorization.split(" ")[1];
    if(!token)
      return res.status(401).status("Un Authorized");

    const decode = await jwt.decode(token, process.env.JWT_KEY);
    if(!decode)
    return res.status(401).send("Un Authorized");

    return decode;
}